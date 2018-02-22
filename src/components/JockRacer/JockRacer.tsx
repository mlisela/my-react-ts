import * as React from 'react';
import './JockRacer.css';
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
    }

    timer = () => {
        this.setState({ progress: this.state.progress + 1 });
        (this.state.progress >= 99) ? this.setState({ progress: 100 }) : this.setState({progress: 0});
        if (this.state.progress > 99 && this.state.count < 1) {
            // noticed that this is applied to every JockRacer, 
            // researching on having a callback function on parent component
            this.setState({ count: this.state.count + 1 });
            for (let i = 0; i < 1; i++) {
                alert('The winner is :' + this.props.login);
            }
            // alert("In place number :" + this.state.count + " - " + this.props.login);
        }

    }
    componentDidMount() {
        // this.setState = setInterval(this.timer, this.state.interval);
        setInterval(this.timer, this.state.interval);

    }

    render() {
        return (
            <div className="Jocky">
                <img className="img" src={this.props.avatar} alt="Horse jocky" />
                <h3 className="h3">{this.props.login}</h3>
                <progress value={this.state.progress} className="progressBar" color={this.props.color} />
            </div>
        );
    }

}