import React from "react";

class Column extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = this.props.shouldBeRed ? 'tile red' : 'tile';
        return <div className="column">
            <div onClick={this.props.setClicked} className={className}></div>
            <div onClick={this.props.setClicked} className={className}></div>
        </div>
    }
}

export default Column;