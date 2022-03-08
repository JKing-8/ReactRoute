import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function sayHello() {
  return 'Hello'
}


const List = ({ list, onRemoveItem }) => {
  return list.map(({ objectID, ...item }) => <Item item={item} key={objectID} onRemoveItem={onRemoveItem} />
  )
}

const Item = ({ item, onRemoveItem }) => {
  const handlerRemoveStories = () => { onRemoveItem(item) }
  return (
    <div>
      <ul>
        <li><a href={item.url}>{item.title}</a></li>
        <li>{item.num_comments}</li>
        <li>{item.author}</li>
        <button type="button" onClick={handlerRemoveStories}>
          Dismiss
        </button>
      </ul>
    </div>
  )
}

const InputWithLabel = ({ id, value, type = 'text', children, onInputChange, isFocused }) => {
  const inputRef = React.useRef();  /*A . */
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused])

  return (
    <div>
      <label htmlFor="search">{children}: </label>
      <input id={id} type={type} onChange={onInputChange} value={value} autoFocus={isFocused} ref={inputRef} />

      <p>
        Searching for <strong>{value}</strong>
      </p>
    </div>
  )
}

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(localStorage.getItem(key) || initialState)
  React.useEffect(() => { localStorage.setItem(key, value) }, [key, value])
  return [value, setValue]
}


const initalStories = [
  {
    title: 'React',
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


const App = () => {
  const [itemSearch, setItemSearch] = useSemiPersistentState('react', 'react');
  const [stories, setStories] = React.useState(initalStories);
  const handlerRemoveStories = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    );
    setStories(newStories);
    console.log(newStories)
  };
  const title = 'React';
  const onSearch = (event) => {
    setItemSearch(event.target.value)
  };
  const searchedStories = initalStories.filter(story => story.title.toLowerCase().includes(itemSearch.toLowerCase()));

  return (<div>
    {sayHello()}
    <br />
    {title}
    <br />

    <InputWithLabel label='password' id='search' type='text' onInputChange={onSearch} value={itemSearch} isFocused={true}>
      <strong>Reach Text</strong>
    </InputWithLabel>
    <hr />
    <List list={searchedStories} onRemoveItem={handlerRemoveStories} />
  </div >)

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
