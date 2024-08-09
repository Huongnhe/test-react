import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";



class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Huong", age: "14" },
            { id: 2, name: "Cuong", age: "15" },
            { id: 3, name: "Nhung", age: "16" },

        ]
        
    }

    render() {
        return (
            <div>

                <UserInfor />
                <DisplayInfor listUsers={this.state.listUsers} />


            </div>
        )
    };
}
export default MyComponent;