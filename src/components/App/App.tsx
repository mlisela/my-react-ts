import * as React from 'react';
import './App.css';
import { Field } from '../Field';
import { RaceButtons } from '../RaceButtons';

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
		this.startRaceHandler = this.startRaceHandler.bind(this);
		this.resetRaceHandler = this.resetRaceHandler.bind(this);
	}
	startRaceHandler() {
		this.setState({ startGame: true });
	}
	resetRaceHandler() {
		this.setState({ startGame: false });
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
				<div className="Button-div">
					<RaceButtons startRace={this.startRaceHandler} resetRace={this.resetRaceHandler} />
				</div>
			</div>
		);
	}
}