const HOST = 'https://alice-envoy.builtwithdark.com';

export const getHosts = (callback) => {
	fetch(`${HOST}/hosts`)
    .then(res => res.json())
      .then(callback,
        (error) => {
          console.log(error)
        }
      )
}

export const postVisit = (hostName, visitorName, callback) => {
	fetch(`${HOST}/visit`,
		{ method: 'POST',
			body: JSON.stringify({'host': hostName, 'visitor': visitorName }),
			headers: { 'Content-Type': 'application/json' }
		}
	).then(res => res.json())
  .then(
  	(result) => { callback(true) },
    (error) => { callback(false) }
  )
}