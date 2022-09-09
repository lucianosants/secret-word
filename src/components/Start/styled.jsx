import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const Title = styled.h2`
	margin: 2rem auto;

	@media (max-width: 768px) {
		font-size: 2.1rem;
	}
`;
export const Description = styled.h4`
	margin: 2rem auto;
	color: ${(props) => props.theme.colors.yellow};
	line-height: 1.6;

	@media (max-width: 768px) {
		font-size: 1.4rem;
	}
`;

export const Highlight = styled.strong`
	background-color: ${(props) => props.theme.colors.highlight__bg};
	padding: 0.5rem;
	border-radius: 0.5rem;
	position: relative;
	margin: 0 0.5rem;

	&:hover {
		text-decoration: underline 3px solid;
	}

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}
`;
