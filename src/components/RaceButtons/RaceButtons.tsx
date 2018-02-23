import * as React from 'react';
import './RaceButtons.css';

interface Props {
    startRace: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    resetRace: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}
export class RaceButtons extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button className="buttonStart" onClick={this.props.startRace} >Start race</button>
                <button className="buttonReset" onClick={this.props.resetRace} >Reset race</button>
            </div>
        );
    }
}