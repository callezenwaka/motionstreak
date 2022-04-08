export const imageURL = `https://i.pinimg.com/736x/8a/8d/e9/8a8de9aa2e54526fecb40182e510e856.jpg`;
export const photoURL = `https://cdn2.iconfinder.com/data/icons/user-people-4/48/5-512.png`;

export const services = [
	{ 
		address: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8', 
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
			{
				name: "Result",
				index: 2,
				cost: 0.5,
			}
		] 
	},
	{ 
		address: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', 
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
		address: '0x90F79bf6EB2c4f870365E785982E1f101E93b906', 
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
		requester: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
		certifier: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
		verifier: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		name: 'Certificate',
		imageURL: imageURL,
		fee: 0.25,
		index: 0,
		status: 0,
	},
	{
		requester: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
		certifier: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
		verifier: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
		name: 'Transcript',
		imageURL: imageURL,
		fee: 0.25,
		index: 0,
		status: 0,
	},
	{
		requester: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
		certifier: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
		verifier: '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
		name: 'Result',
		imageURL: imageURL,
		fee: 0.25,
		index: 0,
		status: 0,
	},
]

export const accounts = [
	{
		displayName: 'John Doe',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'john.doe@mail.com',
    isTenant: false,
    isActive: true,
    isActivated: true,
    address: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
		affiliate:'0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
	},
	{
		displayName: 'Institution One',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.one@mail.com',
    isTenant: true,
    isActive: true,
    isActivated: true,
    address: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
		affiliate:'0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
	},
	{
		displayName: 'Institution Two',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.two@mail.com',
    isTenant: true,
    isActive: true,
    isActivated: true,
    address: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
		affiliate:'0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
	},
	{
		displayName: 'Institution Three',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.three@mail.com',
    isTenant: true,
    isActive: true,
    isActivated: true,
    address: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
		affiliate:'0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
	},
	{
		displayName: 'Institution Four',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.four@mail.com',
    isTenant: true,
    isActive: true,
    isActivated: true,
    address: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
		affiliate:'0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
	},
	{
		displayName: 'Institution Five',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.five@mail.com',
    isTenant: true,
    isActive: true,
    isActivated: true,
    address: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
		affiliate:'0x90F79bf6EB2c4f870365E785982E1f101E93b906',
	},
	{
		displayName: 'Institution Six',
    phoneNumber: '+2348030003000',
    photoURL: photoURL,
    email: 'institution.six@mail.com',
    isTenant: true,
    isActive: true,
    isActivated: true,
    address: '0x976EA74026E726554dB657fA54763abd0C3a0aa9',
		affiliate:'0x976EA74026E726554dB657fA54763abd0C3a0aa9',
	},
]