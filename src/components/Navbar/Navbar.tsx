import React, { useState } from "react";
import styles from './Navbar.module.css'
import SpotifyWidget from "../Spotify/SpotifyWidget";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../Menu/Menu";
import { Button, Drawer, Link } from "@mui/material";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{

                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    border: "none"
                },
            }}
        >
            <nav className={`${styles.nav}`} id="navbar">
                <div className={styles.navSection}>
                    <h1 className={styles.navTitle}><>JACK KEENE</></h1>
                    <h3 className={styles.subtitle}>Software Engineer @ Snowplow.io</h3>
                </div>
                <div className={styles.navSection}>
                    <NavLink title="About" scrollToId={"about"} />
                    <NavLink className={styles.sectionButton} title="Experience" scrollToId={"experience"} />
                    <NavLink className={styles.sectionButton} title="Projects" scrollToId={"projects"} />
                </div>
                <div className={styles.navSection} >
                    <div className={styles.navSpotify}>
                        <SpotifyWidget />
                    </div>
                    <div className={styles.navSocials}>
                        <Link className={`${styles.logo} `} href='https://github.com/Jack-Keene' target="_blank"><FontAwesomeIcon icon={faGithub as IconProp} /></Link>
                        <Link className={`${styles.logo} `} href='https://www.linkedin.com/in/jack-keene-69851885/' target="_blank"><FontAwesomeIcon icon={faLinkedinIn as IconProp} /></Link>
                        <Link className={`${styles.logo} `} href='mailto:jack.keene1@gmail.com' target="_blank"><FontAwesomeIcon icon={faEnvelope as IconProp} /></Link>
                    </div>
                </div>
            </nav >
        </Drawer >
    )
}

function NavLink(props) {
    const handleClick = (e) => {
        document.getElementById(props.scrollToId).scrollIntoView({
            behavior: 'smooth',
        })
    };
    return (
        <Button
            onClick={handleClick}
            className={`${styles.sectionButton}`}>
            {props.title}
        </Button>
    );
}
