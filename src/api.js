import axios from 'axios'

const HOST = 'https://ellen-fullstackfest.builtwithdark.com';

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
}		




