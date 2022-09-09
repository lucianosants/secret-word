import styled from 'styled-components';

export const Button = styled.button`
	min-width: 66rem;
	background-color: ${(props) => props.theme.colors.btn};
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.text};
	font-size: 2rem;
	border: 2px solid ${(props) => props.theme.colors.btn};
	box-shadow: ${(props) => props.theme.colors.shadow};
	margin: 2rem auto;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: transparent;
		color: ${(props) => props.theme.colors.btn};
	}

	@media (max-width: 768px) {
		margin-bottom: 3rem;
		min-width: 90%;
	}
`;
