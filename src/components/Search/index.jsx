import React,{useState} from 'react'
import './index.css';

const Search = ({getQuery}) => {
  const [text,
    setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  }
  return (
    <section className="center search-box">
      <input
        type='text'
        placeholder='Search characters'
        value={text}
        onChange={(e) => onChange(e.target.value)}
        autoFocus/>
    </section>
  )
}

export default Search;
