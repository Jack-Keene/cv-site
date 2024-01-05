import React from "react";
import styles from './LandingPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCss3, faDocker, faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { BottomNavigation, BottomNavigationAction, CssBaseline, Paper, } from "@mui/material";

export default function LandingPage() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <main className={`${styles.main} ${styles.backgroundTextured}`}>
            <div className={`${styles.content} `}>
                <div className={`${styles.section} ${styles.backgroundTextured}`}>
                    <h1 className={styles.header}>about.</h1>
                    <p>
                        Welcome! I'm Jack Keene, a full-stack software engineer at <a className={styles.link} href="https://snowplow.io/" target="_blank">Snowplow.io</a>. Specializing in Python, React, and TypeScript,
                        I enjoy developing efficient solutions for complex challenges.
                    </p>
                    <p>
                        My time at Snowplow.io has equipped me with expertise in creating robust data applications,
                        combining the power of Python for backend functionality with the versatility of React and TypeScript for seamless user interfaces across a number of products.
                    </p>
                    <p>
                        I'm passionate about continual learning and staying updated with the latest tech advancements, ensuring I deliver innovative solutions that make a real difference.
                    </p>
                    <div className={styles.icons}>
                        <FontAwesomeIcon icon={faReact as IconProp} />
                        <FontAwesomeIcon icon={faPython as IconProp} />
                        <FontAwesomeIcon icon={faJs as IconProp} />
                        <FontAwesomeIcon icon={faHtml5 as IconProp} />
                        <FontAwesomeIcon icon={faCss3 as IconProp} />
                    </div>
                </div>
            </div>
            <div className={`${styles.content} `}>
                <div className={`${styles.section} ${styles.backgroundTextured}`}>
                    <h1 className={styles.header}>about.</h1>
                    <p>
                        Welcome! I'm Jack Keene, a full-stack software engineer at <a className={styles.link} href="https://snowplow.io/" target="_blank">Snowplow.io</a>. Specializing in Python, React, and TypeScript,
                        I enjoy developing efficient solutions for complex challenges.
                    </p>
                    <p>
                        My time at Snowplow.io has equipped me with expertise in creating robust data applications,
                        combining the power of Python for backend functionality with the versatility of React and TypeScript for seamless user interfaces across a number of products.
                    </p>
                    <p>
                        I'm passionate about continual learning and staying updated with the latest tech advancements, ensuring I deliver innovative solutions that make a real difference.
                    </p>
                    <div className={styles.icons}>
                        <FontAwesomeIcon icon={faReact as IconProp} />
                        <FontAwesomeIcon icon={faPython as IconProp} />
                        <FontAwesomeIcon icon={faJs as IconProp} />
                        <FontAwesomeIcon icon={faHtml5 as IconProp} />
                        <FontAwesomeIcon icon={faCss3 as IconProp} />
                    </div>
                </div>
            </div>
            <div className={`${styles.content} `}>
                <div className={`${styles.section} ${styles.backgroundTextured}`}>
                    <h1 className={styles.header}>about.</h1>
                    <p>
                        Welcome! I'm Jack Keene, a full-stack software engineer at <a className={styles.link} href="https://snowplow.io/" target="_blank">Snowplow.io</a>. Specializing in Python, React, and TypeScript,
                        I enjoy developing efficient solutions for complex challenges.
                    </p>
                    <p>
                        My time at Snowplow.io has equipped me with expertise in creating robust data applications,
                        combining the power of Python for backend functionality with the versatility of React and TypeScript for seamless user interfaces across a number of products.
                    </p>
                    <p>
                        I'm passionate about continual learning and staying updated with the latest tech advancements, ensuring I deliver innovative solutions that make a real difference.
                    </p>
                    <div className={styles.icons}>
                        <FontAwesomeIcon icon={faReact as IconProp} />
                        <FontAwesomeIcon icon={faPython as IconProp} />
                        <FontAwesomeIcon icon={faJs as IconProp} />
                        <FontAwesomeIcon icon={faHtml5 as IconProp} />
                        <FontAwesomeIcon icon={faCss3 as IconProp} />
                    </div>
                </div>
            </div>
            {/* <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
                <BottomNavigation showLabels value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="About"
                    />
                    <BottomNavigationAction
                        label="Experience"
                    />
                    <BottomNavigationAction
                        label="Projects"
                    />
                    <BottomNavigationAction label="Contact" />
                </BottomNavigation>
            </Paper> */}
        </main>)
}