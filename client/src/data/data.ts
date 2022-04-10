export const imageURL = `https://i.pinimg.com/736x/8a/8d/e9/8a8de9aa2e54526fecb40182e510e856.jpg`;
export const photoURL = `https://cdn2.iconfinder.com/data/icons/user-people-4/48/5-512.png`;

export const services = [
	{ 
		address: '0x90F79bf6EB2c4f870365E785982E1f101E93b906', 
		fees: [
			{
				name: "Certificate",
				cost: 0.25,
				index: 0,
			},
			{
				name: "Transcript",
				cost: 0.75,
				index: 1,
			},
			{
				name: "Result",
				cost: 0.5,
				index: 2,
			}
		] 
	},
	{ 
		address: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65', 
		fees: [
			{
				name: "Certificate",
				index: 0,
				cost: 0.25,
			},
			{
				name: "Transcript",
				index: 1,
				cost: 0.5,
			},
		] 
	},
	{ 
		address: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc', 
		fees: [
			{
				name: "Certificate",
				index: 0,
				cost: 0.25,
			},
			{
				name: "Transcript",
				index: 1,
				cost: 0.75,
			},
		] 
	},
]

export const documents = [
	{
		requester: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
		certifier: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
		verifier: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.25,
		index: 0,
		status: 0,
	},
	{
		requester: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
		certifier: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		verifier: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
		name: 'Transcript',
		imageURL: imageURL,
		fee: 0.75,
		index: 1,
		status: 0,
	},
	{
		requester: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
		certifier: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
		verifier: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.50,
		index: 2,
		status: 0,
	},
	{
		requester: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
		certifier: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
		verifier: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.25,
		index: 3,
		status: 0,
	},
	{
		requester: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
		certifier: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		verifier: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
		name: 'Transcript',
		imageURL: imageURL,
		fee: 0.75,
		index: 4,
		status: 0,
	},
	{
		requester: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
		certifier: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
		verifier: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.50,
		index: 5,
		status: 0,
	},
]

export const accounts = [
	{
		displayName: 'John Doe',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'john.doe@mail.com',
    role: 'User',
    isActive: true,
    isActivated: true,
    address: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
		affiliate:'0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
	},
	{
		displayName: 'Jane Doe',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'jane.doe@mail.com',
    role: 'User',
    isActive: true,
    isActivated: true,
    address: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
		affiliate:'0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
	},
	{
		displayName: 'Tenant One',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.one@mail.com',
    role: 'Tenant',
    isActive: true,
    isActivated: true,
    address: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
		affiliate:'0x90F79bf6EB2c4f870365E785982E1f101E93b906',
	},
	{
		displayName: 'Tenant Two',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.two@mail.com',
    role: 'Tenant',
    isActive: true,
    isActivated: true,
    address: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		affiliate:'0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
	},
	{
		displayName: 'Tenant Three',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'Tenant.three@mail.com',
    role: 'Tenant',
    isActive: true,
    isActivated: true,
    address: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
		affiliate:'0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
	},
	{
		displayName: 'Admin One',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'admin.one@mail.com',
    role: 'Admin',
    isActive: true,
    isActivated: true,
    address: '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
		affiliate:'0x90F79bf6EB2c4f870365E785982E1f101E93b906',
	},
	{
		displayName: 'Admin Two',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'admin.two@mail.com',
    role: 'Admin',
    isActive: true,
    isActivated: true,
    address: '0x14dC79964da2C08b23698B3D3cc7Ca32193d9955',
		affiliate:'0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
	},
	{
		displayName: 'Admin Three',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'admin.three@mail.com',
    role: 'Admin',
    isActive: true,
    isActivated: true,
    address: '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f',
		affiliate:'0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
	},
]