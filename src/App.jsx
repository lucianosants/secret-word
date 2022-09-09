import { ThemeProvider } from 'styled-components';
import { themeDefault } from './config/theme';

import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={themeDefault}>
				<GlobalStyles />
				<Layout />
			</ThemeProvider>
		</div>
	);
}

export default App;
