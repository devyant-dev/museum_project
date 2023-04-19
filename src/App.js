// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './component/Style/Main.scss'
import Main from './component/Main';
import Artist from './component/Artist';
import MostView from './component/MostView';
import Period from './component/Period';
import Artwork from './component/Artwork';
import Navigation from './component/Navigation';

function App() {

  // const metData = () => {
  //   fetch('https://www.rijksmuseum.nl/api/en/collection?key=wn1LWoY9&involvedMaker=Adriaen+van+Wesel')
  //     //fetch('https://www.rijksmuseum.nl/api/nl/collection/BK-NM-3888?key=wn1LWoY9')
  //     //fetch('https://www.rijksmuseum.nl/api/en/collection?key=wn1LWoY9&f.dating.period=16')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }

  // new Promise(function (res, rej) {
  //   metData();
  //   //rej('aa');
  // })


  return (
    <BrowserRouter>
   
      <div className="App">

        <Routes>
          <Route path={"/"} element={ <Period /> } />
          {/* <Route path="/" element={ <Main /> }/>
          <Route path="/Period" element={ <Period /> }/>
          <Route path="/MostView" element={ <MostView /> }/> */}
        </Routes>
      

        <Routes>
          <Route path="/:id" element={ <Artist /> }/>
          {/* <Route path="/Period/:id" element={ <Artist /> }/> */}
          <Route path="/Period/:id/ArtWork" element={ <Artwork /> }/> 
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
