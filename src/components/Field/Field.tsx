import * as React from 'react';
import './Field.css';
import { getRandomArrayIndex } from '../../Utils/FieldUtilities';
import { JockRacer } from '../JockRacer';

const teamJson = JSON.parse(JSON.stringify(require('../../team.json')));

interface Props {
    samplePropProp?: string;
    startGame: boolean;
}

interface State {
    sampleStateProp?: string;
    randomArrayIndex: Array<number>;
}
interface Racer {
    avatar_url: string;
    login: string;
    color: string;
}

let indexArray: Array<number> = [];
let data: Array<object> = [];
// teamJson = JSON.parse(JSON.stringify(require("../../team.json")));

export class Field extends React.Component<Props, State> {

    // data = teamJson.slice(0, 5).map((person: Racer) => {
    //     return (
    //         avatar_url: person.avatar_url;
    //     );
    // });
    constructor(props: Props) {
        super(props);
        if (this.props.startGame) {
            this.state = {
                randomArrayIndex: getRandomArrayIndex(indexArray)
            };
        } else {
            this.state = {
                randomArrayIndex: getRandomArrayIndex(indexArray)
            };
        }
        data = [
            {
                avatar_url: teamJson[this.state.randomArrayIndex[0]].avatar_url,
                login: teamJson[this.state.randomArrayIndex[0]].login,
                color: '#800000'
            },
            {
                avatar_url: teamJson[this.state.randomArrayIndex[1]].avatar_url,
                login: teamJson[this.state.randomArrayIndex[1]].login,
                color: '#FF0000'
            },
            {
                avatar_url: teamJson[this.state.randomArrayIndex[2]].avatar_url,
                login: teamJson[this.state.randomArrayIndex[2]].login,
                color: '#FFA500'
            },
            {
                avatar_url: teamJson[this.state.randomArrayIndex[3]].avatar_url,
                login: teamJson[this.state.randomArrayIndex[3]].login,
                color: '#FFFA00'
            },
            {
                avatar_url: teamJson[this.state.randomArrayIndex[4]].avatar_url,
                login: teamJson[this.state.randomArrayIndex[4]].login,
                color: '#FFFA00'
            }
        ];
    }

    render() {
        if (this.props.startGame) {
            return (
                <div>
                    {
                        data.map((racer: Racer, key: number) => {
                            return (
                                <JockRacer
                                    avatar={racer.avatar_url}
                                    login={racer.login}
                                    color={racer.color}
                                    key={racer.login}
                                />
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <h1>Start the race by clicking the start race button</h1>
            );
        }

    }
}