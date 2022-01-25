import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function sayHello() {
  return 'Hello'
}

const list_obj = [
  {
    title: 'route',
    url: 'https://react.js',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

const List = () => {
  return list_obj.map(item => (<div key={item.objectID}>
    <li>{item.title}</li>
    <li>{item.url}</li>
    <li>{item.author}</li>
  </div>)
  )
}

class App extends Component {
  render() {
    const title = 'React'
    const handleChange = event => {
      console.log(event.target.value)
    }
    return (<div>
      {sayHello()}
      <br />
      {title}
      <br />
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <hr />
      <List />
    </div>)
  }
}

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
