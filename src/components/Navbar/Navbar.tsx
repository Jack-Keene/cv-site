import React, { useState } from "react";
import styles from './Navbar.module.css'
import SpotifyWidget from "../Spotify/SpotifyWidget";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../Menu/Menu";

export default function Navbar() {
    return (
        <nav className={`${styles.nav} `}>
            <h1 className={styles.navSection} id={styles.navTitle}><>JACK KEENE</></h1>
            <div className={styles.navSection} id={styles.navSocials}>
                <div><FontAwesomeIcon className={`${styles.logo} `} icon={faGithub as IconProp} /></div>
                <div><FontAwesomeIcon className={`${styles.logo} `} icon={faLinkedinIn as IconProp} /></div>
                <SpotifyWidget />
            </div>
            <div className={styles.navSection} id={styles.navMenu} >
                <Menu />
            </div>

        </nav >
    )
}