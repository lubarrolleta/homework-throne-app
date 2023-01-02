import React from 'react';
import styles from './Header.module.scss'
const Header = () => {
    return (
        <div className={`container ${styles.header}`}>
            <img className={styles.imgFondo} src="./src/assets/img/header.png"  alt="header"/>
        </div>
    );
}

export default Header;
