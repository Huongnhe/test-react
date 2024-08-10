import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShow: true
    }
    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShow === true ? "Hide" : "Show"}
                    </span>
                </div>
                {this.state.isShow &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age <= 18 ? "red" : "green"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                            )

                        })}


                        {/* <div>My name is {name}</div>
                <div>My age is {age}</div> */}


                    </div>}
            </div>
        )
    };
}
export default DisplayInfor;