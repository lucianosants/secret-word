import React from 'react';
import MainButton from '../MainButton';

import { Container, Title, SubTitle, Score } from './styled';

export default function End({ onRestartGame, onScore }) {
	return (
		<Container>
			<Title>Fim do Jogo!</Title>
			<SubTitle>
				A sua pontuação foi: <Score>{onScore}</Score>{' '}
			</SubTitle>

			<MainButton setHandle={onRestartGame}> Reiniciar o game</MainButton>
		</Container>
	);
}
