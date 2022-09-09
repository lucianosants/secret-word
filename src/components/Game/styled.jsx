import styled from 'styled-components';

export const Container = styled.section`
	margin-top: 1rem;
`;

export const Title = styled.p`
	margin-bottom: 1rem;
	font-size: 1.6em;
	line-height: 1.1;
`;

export const TitleHighlight = styled.strong`
	color: ${(props) => props.theme.colors.green__main};
`;

export const HeaderContainer = styled.div``;

export const SubTitle = styled.h2`
	font-size: 2.4em;
	line-height: 1.1;

	@media (max-width: 768px) {
		font-size: 1.8em;
	}
`;

export const Tips = styled.p`
	line-height: 1.1;
	margin-top: 1rem;
`;

export const Try = styled.p`
	line-height: 1.1;
	margin-top: 0.8rem;
	opacity: 0.6;
`;

export const TipsHighlight = styled.strong`
	letter-spacing: 0.3rem;
	margin-left: 0.5rem;
	color: ${(props) => props.theme.colors.green__main};
`;

export const WordContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 1rem;
	padding: 1.5rem;
	border: 1rem solid ${(props) => props.theme.colors.green__main};
	background-color: ${(props) => props.theme.colors.green__bg};
	border-radius: 12px;
`;

export const Letter = styled.span`
	font-size: 4.2rem;
	line-height: 1.1;
	width: 5rem;
	height: 5rem;
	border: 3px solid ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.primary};
	text-transform: uppercase;
	font-weight: 700;
`;

export const BlankSquare = styled.span`
	font-size: 4.2rem;
	line-height: 1.1;
	width: 5rem;
	height: 5rem;
	border: 3px solid ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.primary};
	text-transform: uppercase;
	font-weight: 700;
`;

export const LetterContainer = styled.div`
	margin-top: 1rem;
`;

export const Text = styled.p`
	margin-bottom: 1rem;
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
`;

export const Input = styled.input`
	font-size: 1.6em;
	width: 3rem;
	height: 3rem;
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.colors.btn};
	padding: 0.5rem 2rem;
	border-radius: 0.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.text};
	font-size: 2rem;
	border: 2px solid ${(props) => props.theme.colors.btn};
	box-shadow: ${(props) => props.theme.colors.shadow};

	&:hover {
		background-color: transparent;
		color: ${(props) => props.theme.colors.btn};
	}
`;

export const WrongLettersContainer = styled.div`
	margin: 2rem 0 1rem 0;
	border-top: 3px dashed ${(props) => props.theme.colors.green__main};
`;

export const Description = styled.p`
	display: flex;
	justify-content: center;
	margin: 0.5rem 0;
	font-size: 1.3em;
`;

export const LetterAlready = styled.span`
	margin-right: 0.5rem;
	color: ${(props) => props.theme.colors.green__main};
`;
