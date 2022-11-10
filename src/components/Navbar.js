import React from 'react';

// Styles
import styles from "./Navbar.module.css";

const Navbar = ({LogoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Botogram
            </div>
            <div className={styles.logout} onClick={LogoutHandler}>
                Log out
            </div>
        </div>
    );
};

export default Navbar;