import React from 'react';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bio from './components/Bio';
import TechStack from './components/TechStack';

function App():JSX.Element {
  return (
		<div>
			<Header />
			<Bio />
			<TechStack />
		</div>
	);
}

export default App;
