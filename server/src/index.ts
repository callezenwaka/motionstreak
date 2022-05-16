// import 'dotenv/config';

import express, { Application, Request, Response } from "express";
import admin from 'firebase-admin';
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { graphqlUploadExpress } from "graphql-upload";
import { schema } from "./graphql/schema/schema";
import { isAuthenticated, isSigner } from './utils';
// import document from "./routes/document";
// import service from "./routes/service";
// import account from "./routes/account";

const app: Application = express();
// Initialize firebase admin sdk config
// admin.initializeApp({
//   'credential': admin.credential.applicationDefault(),
// });

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process?.env?.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,'\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

// Route middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(isAuthenticated);
app.use(isSigner);

// Ping healthz route
app.get('/healthz',async (req: Request, res: Response) => {
  try {
    return res.status(200).json('Healthz');
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
});

// Verify request
// app.use('/account', account);
// app.use('/service', service);
// app.use('/document', document);

// Ping home route
app.get('/', (req: Request, res: Response) => {
  try {
    return res.status(200).json('Ok');
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
});

app.use(
  // "/graphql",
  // graphqlHTTP({
  //   schema,
  //   graphiql: true,
  // }),
  "/api",
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  graphqlHTTP((req: any, res: any, graphQLParams) => {
    return {
      schema,
      graphiql: true,
      context: {
        signer: req.signer,
        user: req.user,
        // whatever else you want
      }
    }
  })
)

// Set up port and start the server
app.listen( process.env.PORT, () => {
  console.log(`Server running at:`);
  console.log(`- Local: http://localhost:${process.env.PORT}`);
  console.log(`- Network: http://000.000.0.000:${process.env.PORT}`);
});

export default app;