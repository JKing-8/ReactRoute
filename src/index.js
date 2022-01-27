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

const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />

    <p>
      Searching for <strong>{props.itemSearch}</strong>
    </p>
  </div>
)

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
  const [itemSearch, setItemSearch] = React.useState('')
  const onSearch = (event) => {
    setItemSearch(event.target.value)
  }
  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(itemSearch.toLowerCase()))
  return (<div>
    {sayHello()}
    <br />
    {title}
    <br />

    <Search onSearch={onSearch} itemSearch={itemSearch} />
    <hr />
    <List list={searchedStories} />
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
