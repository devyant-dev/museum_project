import React, { useContext, useState } from 'react';
import './Style/Period.scss';
import cenData from '../data/data.json';
import { Link } from 'react-router-dom';
import { myCont } from '../Context';

const Period = () => {
  
  // const data15Cen = cenData["15th"];
  // const data16Cen = cenData["16th"];
  // const data17Cen = cenData["17th"];
  // const data18Cen = cenData["18th"];
  // const data19Cen = cenData["19th"];
  // const data20Cen = cenData["20th"];

  //const [state, setState] = useState("15th");

  const {state, setState} = useContext(myCont);
  
  const data = cenData[state];

  console.log(data)
  

  //forit문으로 json 돌리기

  const century = ['15th', '16th', '17th', '18th', '19th', '20th']

  // menu hide, show
  const [listView, setListView] = useState(false);
  const menuBlock = () => {
    setListView(!listView);
  }

  function selCen(btn){
    setListView(!listView)
    setState(btn)
  }


  console.log(state)




  return (

      <div className='periodWrapper'>

        <section className='periBtnCont'>
          <div className='periBtn'>
            <button className='periBtnSelect' onClick={menuBlock}>{state} Century</button>
          </div>
          <div className={`periCenMenu ${listView ? "active" : ""}`}>
            { 
              century.map((btn, idx) => {

                return (<button className='periCenBtn' onClick={ () => {selCen(btn)} } key={idx}>
                  {btn} Century

                </button>)
              })
            }
          </div>
        </section>

        <section className='periListCont'>
        
          {
           data.map((el, idx) => {
              return (
                <div className='periListBox' key={idx}>
                  <Link to={`${el.artist}`}>
                    <p className='cenNum'>{'0' + (idx + 1)}</p>
                    <p className='cenName'>{el.artist}</p>
                    <div className='periListImgBox' style={{ backgroundImage: `url(${el.image})` }}>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </section>

      </div>

  )
}

export default Period