import { html } from 'htm/preact';

import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return html`
		<${Header} />
		<main className="main">
			<div className="container">
				<${Profile} />
			</div>
		</main>
		<${Footer} />
	`;
}

export default App;
