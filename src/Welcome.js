import React from "react";

export default class Welcome extends React.Component {
    static defaultProps = {
        name: "Gianmai",
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}