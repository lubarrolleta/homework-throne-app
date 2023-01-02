import React from 'react';
import Card from './Components/Card';
import styles from './Menu.module.scss';
const Menu = (props) => {
    const {data,setId} = props;
    // console.log(data.length);
    
    return (
        <div className={`container ${styles.menu}`}>
            {data.map((game)=> (<Card setId={setId} key={game.id} fullName={game.fullName} title={game.title} imageUrl={game.imageUrl} id={game.id}/>))}
        </div>
    );
}

export default Menu;
