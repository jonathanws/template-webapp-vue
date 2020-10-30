/**
 * Constants file for front-end paths/routes
 */

const PREFIX = '/'
const path = (str) => `${PREFIX}${str}`

// String routes used to navigate through the webapp.
// When adding a new page, make sure to add a new reference in router.js
export const pages = {
	HOME: path(''),
	PAGE_NOT_FOUND: '*', // do not prefix this path
}
