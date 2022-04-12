export const imageURL = `https://i.pinimg.com/736x/8a/8d/e9/8a8de9aa2e54526fecb40182e510e856.jpg`;
export const photoURL = `https://cdn2.iconfinder.com/data/icons/user-people-4/48/5-512.png`;

export const services = [
	{ 
		address: '0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a', 
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
		address: '0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE', 
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
		address: '0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2', 
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
		requester: '0x109333D0807dACadb85C399016c2B448384484a4',
		certifier: '0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a',
		verifier: '0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.25,
		index: 0,
		status: 0,
	},
	{
		requester: '0x109333D0807dACadb85C399016c2B448384484a4',
		certifier: '0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE',
		verifier: '0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a',
		name: 'Transcript',
		imageURL: imageURL,
		fee: 0.75,
		index: 1,
		status: 2,
	},
	{
		requester: '0x109333D0807dACadb85C399016c2B448384484a4',
		certifier: '0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2',
		verifier: '0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.50,
		index: 2,
		status: 1,
	},
	{
		requester: '0x6ed5687C3363D7B51050E7B159877249dBB78329',
		certifier: '0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a',
		verifier: '0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.25,
		index: 3,
		status: 1,
	},
	{
		requester: '0x6ed5687C3363D7B51050E7B159877249dBB78329',
		certifier: '0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE',
		verifier: '0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2',
		name: 'Transcript',
		imageURL: imageURL,
		fee: 0.75,
		index: 4,
		status: 4,
	},
	{
		requester: '0x6ed5687C3363D7B51050E7B159877249dBB78329',
		certifier: '0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2',
		verifier: '0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.50,
		index: 5,
		status: 3,
	},
]

export const accounts = [
	{
		displayName: 'John Doe',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'john.doe@onevault.com',
    role: 'User',
    isActive: true,
    isActivated: true,
    address: '0x109333D0807dACadb85C399016c2B448384484a4',
		affiliate:'0x109333D0807dACadb85C399016c2B448384484a4',
	},
	{
		displayName: 'Jane Doe',
    phoneNumber: '+2348030003001',
    photoURL: photoURL,
    email: 'jane.doe@onevault.com',
    role: 'User',
    isActive: true,
    isActivated: true,
    address: '0x6ed5687C3363D7B51050E7B159877249dBB78329',
		affiliate:'0x6ed5687C3363D7B51050E7B159877249dBB78329',
	},
	{
		displayName: 'University of Onevault',
    phoneNumber: '+2348030003002',
    photoURL: photoURL,
    email: 'universityofonevault@UO.com',
    role: 'Tenant',
    isActive: true,
    isActivated: true,
    address: '0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a',
		affiliate:'0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a',
	},
	{
		displayName: 'Onevault University',
    phoneNumber: '+2348030003003',
    photoURL: photoURL,
    email: 'onevaultuniversity@OU.com',
    role: 'Tenant',
    isActive: true,
    isActivated: true,
    address: '0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE',
		affiliate:'0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE',
	},
	{
		displayName: 'Onevault Institute of Technology',
    phoneNumber: '+2348030003004',
    photoURL: photoURL,
    email: 'onevaultinstituteoftech@OIT.com',
    role: 'Tenant',
    isActive: true,
    isActivated: true,
    address: '0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2',
		affiliate:'0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2',
	},
	{
		displayName: 'Admin UO',
    phoneNumber: '+2348030003005',
    photoURL: photoURL,
    email: 'admin@UO.com',
    role: 'Admin',
    isActive: true,
    isActivated: true,
    address: '0xfc9bb3597fd76c15CC0075430450B8a6ed42F9e9',
		affiliate:'0x578c4D59d4cdbE2a3552990f8a16d1723ab6354a',
	},
	{
		displayName: 'Admin OU',
    phoneNumber: '+2348030003006',
    photoURL: photoURL,
    email: 'admin@OU.com',
    role: 'Admin',
    isActive: true,
    isActivated: true,
    address: '0x69De80F6a9BC5B275712a99E6ded4296E07CeeE1',
		affiliate:'0x5caCf6710193D1cE51CfA28c776DbdcdfB4F87fE',
	},
	{
		displayName: 'Admin OIT',
    phoneNumber: '+2348030003007',
    photoURL: photoURL,
    email: 'admin@OIT.com',
    role: 'Admin',
    isActive: true,
    isActivated: true,
    address: '0x0E5c91694703be69Be5789A8Ed8420258BeD43b3',
		affiliate:'0x33cc4D4EC0d47106BcBe1DcD62462A22455d32f2',
	},
]