/**
 * Globals to reference when doing javascript work
 *
 * Values here are either constants, environment variables,
 * or other things that are not large enough to warrant a dedicated file
 */

import axios from 'axios'

// api
const key = process.env.VUE_APP_BACKEND_KEY
const baseURL = process.env.VUE_APP_BACKEND_BASEURL || 'no-default-baseurl-set'
const SECONDS = 1000
const api = axios.create({
	baseURL,
	headers: {
		'X-Api-Key': key,
	},
	timeout: 30 * SECONDS,
})

// Current version.  Should be incremented and matched with package.json
const VERSION = '1.0.0'

export { api, VERSION }
