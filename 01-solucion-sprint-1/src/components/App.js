import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Header from "./Header.js"
import Dummy from "./Dummy.js"
import SolutionLetters from './SolutionLetters.js';
// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';
import ErrorLetters from './ErrorLetters.js';
import Form from './Form.js';
import Footer from './Footer.js';
import Options from './Options.js';
import Main from './Main.js';
import Instructions from './Instructions.js';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events





  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };


  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path="/" element={<Main word={word} userLetters={userLetters}
            lastLetter={lastLetter}
            handleLastLetter={handleLastLetter} />} />
          <Route path="/options" element={<Options setWord={setWord} />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
