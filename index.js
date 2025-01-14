import farben from "./farben.json" with { type: "json" }

// eslint-disable-next-line ts/explicit-module-boundary-types
export function alpha(hexa, alpha = 1) {
	return `${hexa}${`0${Number(Math.round(255 * alpha)).toString(16)}`.slice(-2)}`
}

export { farben }
