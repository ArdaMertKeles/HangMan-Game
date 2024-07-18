import { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header';
import Stickman from './components/Stickman';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import turkishFlag from './img/turkishFlag.png'
import englishFlag from './img/englishFlag.jpg'

function App() {

  const [elements, setElements] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [playerScore, setPlayerScore] = useState(0)
  const [language, setLanguage] = useState('eng')
  const [showWord, setShowWord] = useState(false);
  const [tr, setTr] = useState(false)

  // Words both turkish and english
  const words = {
    tr : [
      {
        word: 'televizyon'
      },
      {
        word: 'kanepe'
      },
      {
        word: 'palas'
      },
      {
        word: 'kahverengi'
      },
      {
        word: 'kalemlik'
      },
      {
        word: 'kalemtıraş'
      },
      {
        word: 'ayakkabı'
      },
      {
        word: 'bilgisayar'
      },
      {
        word: 'internet'
      },
      {
        word: 'arjantin'
      },
      {
        word: 'türkiye'
      },
      {
        word: 'dünya'
      },
      {
        word: 'kapı'
      },
      {
        word: 'yastık'
      },
      {
        word: 'futbol'
      },
      {
        word: 'tabak'
      },
      {
        word: 'fenerbahçe'
      },
      {
        word: 'kartal'
      },
      {
        word: 'kanarya'
      },
      {
        word: 'köpek'
      },
      {
        word: 'kertenkele'
      },
      {
        word: 'gömlek'
      },
      {
        word: 'vantilatör'
      },
      {
        word: 'bilgisayar'
      },
      {
        word: 'yazılım'
      },
      {
        word: 'şişe'
      },
      {
        word: 'kolonyağı'
      },
      {
        word: 'zeytin'
      },
      {
        word: 'telefon'
      },
      {
        word: 'şarkı'
      },
      {
        word: 'üniversite'
      },
      {
        word: 'basketbol'
      },
      {
        word: 'insan'
      },
      {
        word: 'klavye'
      },
      {
        word: 'market'
      },
      {
        word: 'uydu'
      },
      {
        word: 'kablo'
      },
      {
        word: 'şarj'
      },
      {
        word: 'kayısı'
      },
      {
        word: 'norveç'
      },
      {
        word: 'portekiz'
      },
      {
        word: 'kazakistan'
      },
      {
        word: 'antalya'
      },
      {
        word: 'istanbul'
      },
      {
        word: 'ankara'
      },
      {
        word: 'gümüşhane'
      },
      {
        word: 'trabzon'
      },
      {
        word: 'uludağ'
      },
      {
        word: 'lunapark'
      },
      {
        word: 'motorbisiklet'
      },
      {
        word: 'ehliyet'
      },
      {
        word: 'kavşak'
      },
      {
        word: 'sandık'
      }
    ],
    eng : [
      {
        word: 'amusement'
      },
      {
        word: 'bottle'
      },
      {
        word: 'chest'
      },
      {
        word: 'computer'
      },
      {
        word: 'software'
      },
      {
        word: 'engineering'
      },
      {
        word: 'immersive'
      },
      {
        word: 'sword'
      },
      {
        word: 'pillow'
      },
      {
        word: 'remote'
      },
      {
        word: 'card'
      },
      {
        word: 'football'
      },
      {
        word: 'glove'
      },
      {
        word: 'fish'
      },
      {
        word: 'shark'
      },
      {
        word: 'spider'
      },
      {
        word: 'argantine'
      },
      {
        word: 'turkey'
      },
      {
        word: 'keyboard'
      },
      {
        word: 'headset'
      },
      {
        word: 'kebab'
      },
      {
        word: 'watermelon'
      },
      {
        word: 'fear'
      },
      {
        word: 'guardian'
      },
      {
        word: 'club'
      },
      {
        word: 'university'
      },
      {
        word: 'school'
      },
      {
        word: 'glasses'
      },
      {
        word: 'phone'
      },
      {
        word: 'trench'
      },
      {
        word: 'lesson'
      },
      {
        word: 'tame'
      },
      {
        word: 'seed'
      },
      {
        word: 'need'
      },
      {
        word: 'cinema'
      },
      {
        word: 'theatre'
      },
      {
        word: 'antique'
      },
      {
        word: 'howl'
      },
      {
        word: 'lock'
      },
      {
        word: 'pencil'
      },
      {
        word: 'eraser'
      },
      {
        word: 'painting'
      },
      {
        word: 'coffe'
      },
      {
        word: 'pizza'
      },
      {
        word: 'milkshake'
      },
      {
        word: 'mother'
      },
      {
        word: 'father'
      },
      {
        word: 'cousin'
      },
      {
        word: 'dye'
      }
    ]
  }

  // Starts new word
  const addElement = () => {
    let randomIndex = Math.floor(Math.random() * words.tr.length)
    const upperWord = words[language][randomIndex].word.toUpperCase()
    const letters = upperWord.split('')
    setElements(letters)
    setElements(letters);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  }

  useEffect(() => {
    addElement()
  }, [language])

  // Checks if guessed letters true sets player score +1
  useEffect(() => {
    if (guessedLetters.length > 0 && elements.every(letter => guessedLetters.includes(letter))) {
      setPlayerScore(prevScore => prevScore + 3);
      addElement();
    }
  }, [guessedLetters]);

  // Guessing letters
  const onKeyPress = (button) => {
    const upperButton = button.toUpperCase();
    if (elements.includes(upperButton)) {
      setGuessedLetters([...guessedLetters, upperButton]);
    }else{
      setIncorrectGuesses(prev => {
        const newIncorrectGuesses = prev + 1;
        if (newIncorrectGuesses === 7) {
          setPlayerScore(prevScore => prevScore - 1);
          setShowWord(true);
          setTimeout(() => {
            setShowWord(false);
            addElement();
          }, 2000);
        }
        return newIncorrectGuesses;
      });
    }
  }

  // Language Selection functions
  const englishSelection = () => {
    setLanguage('eng')
    setTr(false)
  }
  const turkishSelection = () => {
    setLanguage('tr')
    setTr(true)
  }

  return (
    <div className='wrapper'>
      <Header tr={tr} turkishFlag={turkishFlag} englishFlag={englishFlag} playerScore={playerScore} turkishSelection={turkishSelection} englishSelection={englishSelection} />
      <div className='mainSection'>
        <Stickman incorrectGuesses={incorrectGuesses} />
        <div className='rightSide'>
          <div className='word'>
            {elements.map((element, key) => (
              <div className='letter' key={key}>{showWord || guessedLetters.includes(element) ? element : '_'}</div>
            ))}
          </div>
          <div className='keyboardContainer'>
          <Keyboard
            theme='hg-theme-default'
            layout={{
              default: [
                "q w e r t y u ı o p ğ ü",
                "a s d f g h j k l ş i",
                "z x c v b n m ö ç"
              ]
            }}
            onKeyPress={onKeyPress}
            />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
