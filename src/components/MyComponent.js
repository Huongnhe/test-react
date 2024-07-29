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
    handleOnchanceInput=(even)=> {
        this.setState({
            name: even.target.value
        })
        console.log(even.target.value)

    }
    handleOnSubmit=(even)=> {
        even.prevenDefault()
        console.log(even.state)

    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(even) => this.handleOnSubmit(even)}>
                    <input type="text"
                        onChange={(even) => this.handleOnchanceInput(even)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    };
}
export default MyComponent;