import React from 'react';
import Column from './column.jsx';
import './example-a.scss'

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    setClicked() {
        this.setState(state => {
            return {
                count: state.count + 1
            };
        })
    }

    render() {
        return <div id="container">
            <Column shouldBeRed={this.state.count === 6} setClicked={this.setClicked.bind(this)}/>
            <Column shouldBeRed={this.state.count === 6} setClicked={this.setClicked.bind(this)}/>
            <Column shouldBeRed={this.state.count === 6} setClicked={this.setClicked.bind(this)}/>
        </div>
    }
}

export default Example;