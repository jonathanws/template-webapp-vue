/**
 * Common module
 *
 * Common functions used through out the app
 */

/**
 * Helper function that wraps #setTimeout() in a promise so it can be awaited
 *
 * Ex:		await sleep(2000)
 *
 * @param {Number} ms - Number of milliseconds to wait
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export { sleep }
