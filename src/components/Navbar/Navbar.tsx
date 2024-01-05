import React, { useState } from "react";
import styles from './Navbar.module.css'
import SpotifyWidget from "../Spotify/SpotifyWidget";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../Menu/Menu";
import { Drawer } from "@mui/material";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <Drawer
            sx={{
                width: "35%",
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: "35%",
                    boxSizing: 'border-box',
                    border: "none"
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <nav className={`${styles.nav} `}>
                <div className={styles.navSection}>
                    <h1 className={styles.navTitle}><>JACK KEENE</></h1>
                    <h3 className={styles.subtitle}>Software Engineer @ Snowplow.io</h3>
                </div>
                <div className={styles.navSection} >
                    <div className={styles.navSpotify}>
                        <SpotifyWidget />
                    </div>
                    <div className={styles.navSocials}>
                        <FontAwesomeIcon className={`${styles.logo} `} icon={faGithub as IconProp} />
                        <FontAwesomeIcon className={`${styles.logo} `} icon={faLinkedinIn as IconProp} />
                        <FontAwesomeIcon className={`${styles.logo} `} icon={faEnvelope as IconProp} />
                    </div>
                </div>
            </nav >
        </Drawer>
    )
}