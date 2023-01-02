import React from 'react';
import s from './Card.module.scss'
const Card = (props) => {
    const {fullName,title,imageUrl,id,setId} = props;
    const goGame = (i)=>{
        // console.log(i);
        setId(i);
    }
    return (
        <div className={s.card} onClick={() => goGame(id)}>
            <img src={imageUrl} alt={fullName} />
            <h2>{fullName}</h2>
            <h3>{title}</h3>
        </div>
    );
}

export default Card;
