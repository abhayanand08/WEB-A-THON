import React from 'react'
import {useLocation} from 'react-router-dom';
import Title from '../title/Title';

const Back = ({title}) => {

    const loaction = useLocation()

  return (
    <div>
        <section className='back'>
            <h2>Home / {loaction.pathname.split("/")[1]}</h2>
            <h1>{title}</h1>
        </section>
        <div className='marigin'></div>
    </div>
  )
}

export default Back