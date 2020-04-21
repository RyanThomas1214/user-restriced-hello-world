const JSO = require('jso')
const Fetcher = require('fetcher');

const client_id = "PFGYiBD0QfWAzxeQ7ehd5lyGYW5yGNXv"
const client_secret = "oUkEMAnGmLLGVQ8U"

let config = {
    client_id,
    client_secret,
    redirect_uri: 'https://nhsd-apim-testing-internal-dev.herokuapp.com/callback',
    authorization: 'https://internal-dev.api.service.nhs.uk/oauth2/authorize',
    token: "https://internal-dev.api.service.nhs.uk/oauth2/token",
    scope: 'qwerty',
    response_type: 'code',
}

let client = new JSO(config)

client.callback()

client.getToken().then((token) => {
    console.log(token)
    return token;
})

let f = new Fetcher(client)
let url =  "https://internal-dev.api.service.nhs.uk/hello-world/hello/user" 
f.fetch(url, {})
	.then((data) => {
		return data.json()
	})
	.then((data) => {
		console.log(data)
	})

