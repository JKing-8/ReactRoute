import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function sayHello() {
  return 'Hello'
}


const List = ({ list }) => {
  return list.map(item => <Item {...item} key={item.objectID} />
  )
}

const Item = ({ url, title, num_comments, author }) => {
  return (
    <div>
      <ul>
        <li><a href={url}>{title}</a></li>
        <li>{num_comments}</li>
        <li>{author}</li>
      </ul>
    </div>
  )
}

const Search = ({ onSearch, itemSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={onSearch} value={itemSearch} />

    <p>
      Searching for <strong>{itemSearch}</strong>
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
  const [itemSearch, setItemSearch] = React.useState('redux')
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
