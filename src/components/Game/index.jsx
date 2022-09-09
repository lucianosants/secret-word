import React, { useRef, useState } from 'react';
import MainButton from '../MainButton';

import {
	Container,
	Title,
	HeaderContainer,
	SubTitle,
	Tips,
	TipsHighlight,
	TitleHighlight,
	WordContainer,
	Letter,
	BlankSquare,
	LetterContainer,
	Text,
	Form,
	Input,
	Button,
	WrongLettersContainer,
	Description,
	LetterAlready,
	Try,
} from './styled';

export default function Game({
	onVerifyLetter,
	onPikedCategory,
	onPikedWord,
	onLetters,
	onGuessedLetters,
	onWrongLetters,
	onGuesses,
	onScore,
	onRestartGame,
}) {
	const [letterWord, setLetterWord] = useState('');
	const letterInputRef = useRef(null);

	const handleLetter = (e) => {
		setLetterWord(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onVerifyLetter(letterWord);

		setLetterWord('');

		letterInputRef.current.focus();
	};

	return (
		<Container>
			<HeaderContainer>
				<Title>
					Pontuação: <TitleHighlight>{onScore}</TitleHighlight>
				</Title>
				<SubTitle>Adivinhe a palavra:</SubTitle>
				<Tips>
					Dica sobre a palavra:
					<TipsHighlight>{onPikedCategory}</TipsHighlight>
				</Tips>
				<Try>
					{onGuesses >= 3
						? `Você tem ${onGuesses} tentativas`
						: `Você ainda tem ${onGuesses} tentativa`}
				</Try>
			</HeaderContainer>
			<WordContainer>
				{onLetters.map((letter, index) =>
					onGuessedLetters.includes(letter) ? (
						<Letter key={index}>{letter}</Letter>
					) : (
						<BlankSquare key={index}></BlankSquare>
					)
				)}
			</WordContainer>

			<LetterContainer>
				<Text>Tente adivinhar uma letra da palavra:</Text>
				<Form onSubmit={handleSubmit}>
					<Input
						type='text'
						name='letter'
						maxLength='1'
						required
						value={letterWord}
						onChange={handleLetter}
						autoComplete='off'
						ref={letterInputRef}
						autoCapitalize='off'
					/>
					<Button type='submit'>Jogar</Button>
				</Form>
			</LetterContainer>

			<WrongLettersContainer>
				<Description>Letras já utilizadas:</Description>

				{onWrongLetters.map((wrongLetter, index) => (
					<LetterAlready key={index}>{wrongLetter}</LetterAlready>
				))}
			</WrongLettersContainer>

			<MainButton setHandle={onRestartGame}>Finalizar game</MainButton>
		</Container>
	);
}
