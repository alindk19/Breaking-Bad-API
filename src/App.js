import { useState,useEffect } from 'react';
import './App.css';
import Error from './components/Error';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [data, setData] = useState(null);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [offset,setOffset] = useState(0);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const doFetch = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://breakingbadapi.com/api/characters?name=${query}&limit=10&offset=${offset}`);
            const json = await res.json();
            setData(json);

        } catch (e) {
            setError(e);
        }
        finally{
            setLoading(false);
        }
    }

    doFetch();
},[query,offset])

const next = () => {
  if(offset>53){
    document.getElementById('btn-next').disabled = true;
  }
  else{
    document.getElementById('btn-prev').disabled = false;
  setOffset(offset+10);
}
}

const prev = () => {
  if(offset<10){
    document.getElementById('btn-prev').disabled = true;
  }
  else{
    setOffset(offset - 10);
    document.getElementById('btn-next').disabled = false;
  }
}

  return (
    <>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
    <div className="main">
      {<CharacterList isLoading={loading} data={data}/>}
      {error && <Error />}
      {data && 
      <section className="center pagination">
        <button id="btn-prev" onClick={prev}> &larr; Previous </button>
        <button id="btn-next"onClick={next}> Next &rarr; </button>
      </section>
    }
    </div>
    </>
  );
}

export default App;
