import fn from './functions'

/**
 * Sets stuff asynchronously
 * @param {Object} state
 * @param {Array} stuff
 */
const setStuffAsync = async ({ commit }, stuff) => {
	await commit(fn.SET_STUFF, stuff)
}

export default {
	[fn.SET_STUFF_ASYNC]: setStuffAsync,
}
