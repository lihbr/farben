Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } })

const farben = require("./farben.json")

// eslint-disable-next-line ts/explicit-module-boundary-types
export function alpha(hexa, alpha = 1) {
	return `${hexa}${`0${Number(Math.round(255 * alpha)).toString(16)}`.slice(-2)}`
}

exports.farben = farben
exports.alpha = alpha
