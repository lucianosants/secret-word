export const pickWordAndCategory = (words) => {
	const categories = Object.keys(words);

	const category =
		categories[Math.floor(Math.random() * Object.keys(categories).length)];

	const word =
		words[category][Math.floor(Math.random() * words[category].length)];

	return { category, word };
};

export const clearLetterStates = (setGuessedLetters, setWrongLetters) => {
	setGuessedLetters([]);
	setWrongLetters([]);
};
