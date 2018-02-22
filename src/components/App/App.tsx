import * as React from 'react';
import './App.css';
import { Field } from '../Field';

interface Props {
	samplePropProp?: string;
}

interface State {
	sampleStateProp?: string;
	startGame: boolean;
}

export class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			startGame: false
		};
	}
	render() {
		return (
			<div className="App" >
				<header className="App-header" >
					<img src={require('../../images/logo.svg')} className="App-logo" alt="logo" />
					<h1 className="App-title" >Welcome to React Horse Race Application </h1>
				</header>
				<div className="Race-field">
					<Field startGame={this.state.startGame} />
				</div>			
			</div>
		);
	}
}