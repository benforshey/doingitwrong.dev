const perCharacter = (fn) => (s) => s.split('').map((c) => fn(c));

const toBinary = (n) => {
	return Number(n).toString(2);
};

const binaryPerPlaceValue = perCharacter((s) => toBinary(s).padStart(4, '0'));

export { binaryPerPlaceValue };
