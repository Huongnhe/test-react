import React from "react";

class AddUserInfor extends React.Component {
    state = {
        id: "Huong",
        name: "Ha Noi",
        age: 21

    };

    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    handleOnchanceInput = (event) => {
        this.setState({
            name: event.target.value
        })


    }
    handleOnchanceInputAge = (event) => {
        this.setState({
            age: event.target.value
        })


    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        // thêm nó mất luôn lỗi fix từ hqua chưa đc

        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: this.state.name,
            age: this.state.age

        });

    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form  >
                    <label>Name</label>
                    <input type="text"
                        onChange={(event) => this.handleOnchanceInput(event)}
                    />

                    <label>Age</label>
                    <input type="text"
                        onChange={(event) => this.handleOnchanceInputAge(event)}
                    />

                    <button onClick={(even) => this.handleOnSubmit(even)}>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddUserInfor;