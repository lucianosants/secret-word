import { Container, Title, Description, Highlight } from './styled';

import MainButton from '../MainButton';

export default function Start({ onStartGame }) {
	return (
		<Container>
			<Title>Bem-vindo&#40;a&#41; ao Secret Word!!</Title>
			<Description>
				Vamos começar a jogar 😆 ? Clique em
				<Highlight>Start</Highlight>e será gerado uma categoria e uma
				palavra de forma aleatória. Você terá que adivinhar qual é a
				palavra. Boa sorte!
			</Description>

			<MainButton setHandle={onStartGame}>Start</MainButton>
		</Container>
	);
}
