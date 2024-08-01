import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "Huong",
        address: "Ha Noi",
        age: 21

    };

    handleOnMoverOver(even) {
        console.log(even.pageX)
    }
    handleOnchanceInput = (even) => {
        this.setState({
            name: even.target.value
        })
        console.log(even.target.value)

    }
    handleOnchanceInputAge = (even) => {
        this.setState({
            age: even.target.value
        })
        console.log(even.target.value)

    }
    handleOnSubmit = (even) => {
        even.prevenDefault()
        console.log(even.state)

    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(even) => this.handleOnSubmit(even)}>
                    <label>Name</label>
                    <input type="text"
                        onChange={(even) => this.handleOnchanceInput(even)}
                    />

                    <label>Age</label>
                    <input type="text"
                        onChange={(even) => this.handleOnchanceInputAge(even)}
                    />

                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default UserInfor;