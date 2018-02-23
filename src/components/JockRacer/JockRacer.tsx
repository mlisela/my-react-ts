import * as React from 'react';
import './JockRacer.css';
import { LinearProgress } from 'material-ui/Progress';

// import ProgressBar from 'react-progressbar';

interface Props {
    login: string;
    avatar: string;
    color: string;
}
interface State {
    interval: number;
    progress: number;
    name: string;
    count: number;
}
export class JockRacer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            interval: Math.floor(Math.random() * 100) + 48,
            progress: 0,
            count: 0,
            name: this.props.login
        };
        this.timer = this.timer.bind(this);
    }

    timer() {
        
        (this.state.progress >= 99) ? this.setState({ progress: 100 }) : 
            this.setState({ progress: this.state.progress + 0.9 });
        if (this.state.progress > 99 && this.state.count < 1) {
            this.setState({ count: this.state.count + 1 });
            alert(this.props.login + '...has finished the race!!!');
        }

    }
    componentDidMount() {
        setInterval(this.timer, this.state.interval);
    }

    render() {
        return (
            <div className="Jocky">
                <img className="img" src={this.props.avatar} alt="Horse jocky" />
                <h3 className="h3">{this.props.login}</h3>
                <LinearProgress variant="determinate" value={this.state.progress}/>
            </div>
        );
    }

}