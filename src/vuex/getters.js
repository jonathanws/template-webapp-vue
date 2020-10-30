import fn from './functions'

/**
 * Gets the correct pluralization of taco/tacos
 *
 * @returns String with the correct pluralization of taco/tacos
 */
const getStuffText = (state) => state.stuff.reduce(({ text }) => text)

export default {
	[fn.GET_STUFF_TEXT]: getStuffText,
}
