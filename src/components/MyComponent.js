import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";



class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Huong", age: "24" },
            { id: 2, name: "Cuong", age: "15" },
            { id: 3, name: "Nhung", age: "26" },

        ]

    }

    handleAddnewUser = (userObj) => {
        // alert("me")
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
        // ý là code y đúc òi ko biết đúng r nhưng ko biết lỗi gì à

    }

    render() {
        return (
            <div>

                <AddUserInfor
                    handleAddnewUser={this.handleAddnewUser}
                />
                <DisplayInfor
                    listUsers={this.state.listUsers}


                />


            </div>
        )
    };
}
export default MyComponent;