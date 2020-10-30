import fn from './functions'

/**
 *
 * @param {Array} stuff - Stuff to set
 */
const setStuff = (state, stuff) => {
	state.stuff = stuff
}

export default {
	[fn.SET_STUFF]: setStuff,
}
