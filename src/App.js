import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {
  state = {
    name: "Huong",
    address: "Ha Noi",
    age: 21

  };
  handleClick() {
    console.log("Click me")
  };
  handleOnMoverOver(even) {
    console.log(even.pageX)
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.address}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMoverOver}>Click me</button>
      </div>
    )
  };
}
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
