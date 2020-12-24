import React, {useState} from 'react'
import './index.css';
import ReactModal from 'react-modal';

const CharacterBox = ({isLoading, character}) => {
  const [isOpen,
    setIsOpen] = useState(false)
  const setModalState = async() => {
    setIsOpen(!isOpen);
  }
  // const [quote,   setQuote] = useState(null); useEffect(() => {   const
  // fetchQuotes = async() => {     try{     const quotes = await
  // fetch(`https://breakingbadapi.com/api/quote?author=${character.name}`);
  // const jsonQuotes = await quotes.json();     setQuote(jsonQuotes)     }
  // catch(e){       console.log(e)     }   }   fetchQuotes(); },
  // [character.name]);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      background: '#333',
      color: 'white',
      width: 'auto',
      borderRadius: '1.2em',
      transition: 'transform 2s',
      height: 'auto',
      overflow: 'hidden',
      transform: 'translate(-50%, -50%)'
    }
  };

  return isLoading
    ? ''
    : ( <> <div id={character.char_id} onClick={setModalState} className='card center'>
      <div id={character.char_id} className='card-inner'>
        <div id={character.char_id} className='card-front'>
          <img id={character.char_id} src={character.img} alt={character.name}/>
        </div>
        <div id={character.char_id} className='card-back'>
          <h1 id={character.char_id}>{character.name}</h1>
          <ul id={character.char_id}>
            <ul id={character.char_id}>
              <strong id={character.char_id}>Occupation:</strong>

              {character
                .occupation
                .map((oc, i) => {
                  return <li key={i} id={character.char_id}>{oc}</li>
                })}
            </ul>
            <li id={character.char_id}>
              <strong id={character.char_id}>Date of Birth:</strong>
              {character.birthday}
            </li>
            <li id={character.char_id}>
              <strong id={character.char_id}>Status:</strong>
              {character.status}
            </li>
          </ul>
        </div>
      </div>
    </div> < ReactModal isOpen = {
      isOpen
    }
    onRequestClose = {
      setModalState
    }
    shouldCloseOnEsc = {
      true
    }
    ariaHideApp = {
      false
    }
    style = {
      customStyles
    }
    closeTimeoutMS = {
      500
    }
    contentLabel = "Character Details" > <div className="react-modal">
      <div>
        <img src={character.img} alt=''/>
      </div>
      <h1 className="character-name">{character.name}</h1>
      <ul className="character-details">
        <li>
          <strong>Date of Birth: &nbsp;</strong>
          {character.birthday}
        </li>
        <li>

          <strong>Occupation:&nbsp;</strong>

          {character
            .occupation
            .map((oc, i) => {
              var occ = oc;
              occ = i < character.occupation.length - 1
                ? oc + ","
                : oc;
              return occ;
            })}
        </li>
        <li>
          <strong>Status: &nbsp;</strong>
          {character.status}
        </li>
        <li>
          <strong>Nickname: &nbsp;</strong>
          {character.nickname}
        </li>
        <li>
          <strong>Actor who portrayed {character.name}: &nbsp;
          </strong>
          {character.portrayed}
        </li>
        <li>
          <strong>Season Appearance: &nbsp;</strong>
          {character.appearance != null && character
            .appearance
            .map((s, i) => {
              var app = s;
              app = i < character.appearance.length - 1
                ? s + ","
                : s;
              return app;
            })}
        </li>
        {/* <li>
          <strong>Quotes:</strong>
          {quote
          }
        </li> */}
      </ul>
    </div> <i className = "btn-close" onClick = {
      setModalState
    } >&times;
    </i>
  </ReactModal > </>)
}

export default CharacterBox;
