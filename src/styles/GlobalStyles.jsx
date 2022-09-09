import { createGlobalStyle } from 'styled-components/';

export default createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		font-family: Helvetica;
		font-size: 62.5%;
		line-height: 24px;
		font-weight: 400;
		color: ${(props) => props.theme.colors.text};
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}
	
	body,
	html {
		height: 100%;
		width: 100%;
		background-color: ${(props) => props.theme.colors.primary};
		background-image: url('/bg_main.svg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;

		@media only screen and (max-width: 768px) {
			background-image: url('/bg_mobile.svg');
		}
	}

	body {
		overflow-x: hidden;
		font-size: 1.6rem;
	}

	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}


	h4 {
		font-size: 1.8em;
		line-height: 1.1;
	}

	button {
		font-size: 1.6em;
		line-height: 1.1;
		border: none;
		background: none;
		cursor: pointer;
		outline: 0;
	}

	#root, .App {
		width: 100%;
		height: 100%;
        display: flex;
        justify-content: center;
	}
`;
