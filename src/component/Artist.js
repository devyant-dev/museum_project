import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Style/Artist.scss'
import cenData from '../data/data.json';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { myCont } from '../Context';


const Artist = () => {

  const {state} = useContext(myCont);

  console.log(state);

  const data = cenData[state];

  const param = useParams();

  console.log(param.id);

  let artworkName = param.id.replaceAll(" ", "+" );

  console.log(artworkName)

  const [art, setArt] = useState([]);



  function aarrtt(){
    axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=wn1LWoY9&involvedMaker=${artworkName}`)
    .then( res => {
      setArt(res.data.artObjects);
    })

    console.log(art)
  }


  // console.log(data17Cen.filter(obj => obj.artist == param.id
  // ))
  
  let artistInfo = data.filter(obj => obj.artist == param.id)

  console.log(artistInfo)

  useEffect(aarrtt, []);
  // [] : 한번만 실행 만약 다른 값이 바뀔때 바뀌길 원하면 [] 자리에 그 함수나 변수를 넣어주면 된다.


  return (
    <div className="artist_wrapper">

      <Link to='/' className='back_btn'> Back </Link>

      <div className="artist_int">
        <div className='artist_int_box'>
          <figure>
            <img src={artistInfo[0].image} alt="" />
            <figcaption className='artist_name'>
              {artistInfo[0].artist}
            </figcaption>
          </figure>
          <p className='art_description'>
            {artistInfo[0].description}
          </p>
        </div>
      </div>

      <div className="artwork_int">
        {
          art.map( obj => (
            <div className='artwork_box' key={obj.id}>
              {/* <Link to='/Period/:id/ArtWork'>
                <p>
                  <img src={obj.webImage?.url} alt={obj.title} />
                </p>
                <p>
                  {obj.title}
                </p>
              </Link> */}
              <div>
                <p>
                  <img src={obj.webImage?.url} alt={obj.title} />
                </p>
                <p>
                  {obj.title}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Artist;