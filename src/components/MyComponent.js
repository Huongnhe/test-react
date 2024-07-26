import React from "react";



class MyComponent extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }

}
export default MyComponent;