import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h2`
	color: ${(props) => props.theme.colors.brand__end};
	margin-bottom: 1rem;
`;

export const SubTitle = styled.h4`
	font-size: 2.4rem;
	margin-bottom: 2rem;
`;

export const Score = styled.strong`
	color: ${(props) => props.theme.colors.brand__end};
`;
