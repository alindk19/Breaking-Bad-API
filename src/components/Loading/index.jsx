import React from 'react'
import './index.css';
import loading from '../../images/loading.gif';

function Loading() {
  return (
    <img className="center loading" src={loading} alt="Loading..."/>
  )
}

export default Loading;