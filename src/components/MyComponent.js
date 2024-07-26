import React from "react";



class MyComponent extends React.Component {
    state = {
        name: "Huong",
        address: "Ha Noi",
        age: 21

    };
    handleClick(even) {
        console.log("ramdom: ", Math.floor((Math.random() * 100) + 1))
        this.setState({
            name: "Huong Thu",
            age: Math.floor((Math.random() * 100) + 1)
        })

    };
    handleOnMoverOver(even) {
        console.log(even.pageX)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(even) => { this.handleClick(even) }}>Click me</button>
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
            </div>
        )
    };
}
export default MyComponent;