import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function sayHello() {
  return 'Hello'
}


const List = (props) => {
  return props.list.map(item => (<div key={item.objectID}>
    <li>{item.title}</li>
    <li>{item.url}</li>
    <li>{item.author}</li>
  </div>)
  )
}

const Search = () => {
  const handleChange = event => {
    setSearchTerm(event.target.value)
    console.log(event.target.value)
  }
  const [searchTerm, setSearchTerm] = React.useState('Hello React~~');
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  )
}

const App = () => {
  const stories = [
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
  const title = 'React';

  return (<div>
    {sayHello()}
    <br />
    {title}
    <br />

    <Search />
    <hr />
    <List list={stories} />
  </div>)

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
