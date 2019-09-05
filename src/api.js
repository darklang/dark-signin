import axios from 'axios'

<<<<<<< HEAD
const HOST = 'https://ellen-fullstackfest.builtwithdark.com';
=======
const HOST = 'https://alice-envoy2.builtwithdark.com';
>>>>>>> 5f2f6da24d350ae35d866cb4f21f61de927670e0

export const getHosts = (callback, error) => {
	axios.get(`${HOST}/hosts`)
		.then(callback)
		.catch(error)
}

export const postVisit = (hostName, visitorName, callback) => {
	axios.post(
		`${HOST}/visit`,
		{
			'host': hostName, 'visitor': visitorName
		}
	).then((result) => { callback(null) })
	.catch((error) => { callback(error) })
<<<<<<< HEAD
}		




=======
}
>>>>>>> 5f2f6da24d350ae35d866cb4f21f61de927670e0
