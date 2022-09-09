import { useCallback, useState, useEffect } from 'react';

import { PageWrapper } from './styled';

import {
	pickWordAndCategory,
	clearLetterStates,
} from '../functions/gameConfig';

import Start from './Start';
import Game from './Game';
import End from './End';

import wordsList from '../data/wordsList';
import stages from '../data/stages';

export default function Layout() {
	const [gameStage, setGameStage] = useState(stages[0].name);
	const [words] = useState(wordsList);

	const [pikedCategory, setPikedCategory] = useState('');
	const [pikedWord, setPikedWord] = useState('');
	const [letters, setLetters] = useState([]);

	const guessesDefault = 3;

	const [guessedLetters, setGuessedLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [guesses, setGuesses] = useState(guessesDefault);
	const [score, setScore] = useState(0);

	useCallback(() => {
		pickWordAndCategory();
	}, [words]);

	const startGame = useCallback(() => {
		clearLetterStates(setGuessedLetters, setWrongLetters);

		const { category, word } = pickWordAndCategory(words);

		let wordLetters = word.split('');

		wordLetters = wordLetters.map((l) => l.toLowerCase());

		setPikedCategory(category);
		setPikedWord(word);
		setLetters(wordLetters);

		setGameStage(stages[1].name);
	}, [pickWordAndCategory]);

	const verifyLetter = (letterWord) => {
		const normalizedLetter = letterWord.toLowerCase();

		if (
			guessedLetters.includes(
				normalizedLetter || wrongLetters.includes(normalizedLetter)
			)
		) {
			return;
		}

		if (letters.includes(normalizedLetter)) {
			setGuessedLetters((currentGuessedLetters) => [
				...currentGuessedLetters,
				letterWord,
			]);
		} else {
			setWrongLetters((currentWrongLetters) => [
				...currentWrongLetters,
				normalizedLetter,
			]);

			setGuesses((currentGuesses) => currentGuesses - 1);
		}
	};

	useEffect(() => {
		if (guesses === 0) {
			clearLetterStates(setGuessedLetters, setWrongLetters);

			setGameStage(stages[2].name);
		}
	}, [guesses]);

	useEffect(() => {
		const uniqueLetters = [...new Set(letters)];

		if (
			guessedLetters.length === uniqueLetters.length &&
			gameStage === 'game'
		) {
			setScore((currentScore) => currentScore + 100);
			startGame();
		}
	}, [guessedLetters, letters, startGame, gameStage]);

	const restartGame = () => {
		setScore(0);
		setGuesses(guessesDefault);
		setGameStage(stages[0].name);
	};

	return (
		<PageWrapper>
			{gameStage === 'start' && (
				<Start onStartGame={() => startGame(startGame)} />
			)}
			{gameStage === 'game' && (
				<Game
					onVerifyLetter={verifyLetter}
					onPikedCategory={pikedCategory}
					onPikedWord={pikedWord}
					onLetters={letters}
					onGuessedLetters={guessedLetters}
					onWrongLetters={wrongLetters}
					onGuesses={guesses}
					onScore={score}
					onRestartGame={restartGame}
				/>
			)}
			{gameStage === 'end' && (
				<End
					onRestartGame={() => restartGame(restartGame)}
					onScore={score}
				/>
			)}
		</PageWrapper>
	);
}
