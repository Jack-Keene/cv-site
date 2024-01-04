import React from "react";
import styles from './LandingPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import plant from './plant.jpg'
import Image from 'next/image'
import { faCss3, faDocker, faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { BottomNavigation, BottomNavigationAction, Box, Card, CardContent, CssBaseline, Typography } from "@mui/material";
import CardCover from '@mui/joy/CardCover';

export default function LandingPage() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <main className={styles.main}>
            <div className={styles.content}>

                <div className={styles.section}>
                    {/* <Box
                        component="ul"
                        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
                    >
                        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                            <CardCover>
                                <img
                                    src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                                    srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </CardCover>
                        </Card>

                    </Box> */}
                    <Image src={plant} alt="tree" placeholder="blur" />
                    <p>
                        Welcome! I'm Jack Keene, a full-stack software engineer with at <a className={styles.link} href="https://snowplow.io/" target="_blank">Snowplow.io</a>. Specializing in Python, React, and TypeScript,
                        I thrive on developing dynamic and efficient solutions for complex challenges.
                    </p>
                    <p>
                        My journey at Snowplow.io has equipped me with expertise in creating robust data applications,
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
            <CssBaseline />

            <BottomNavigation showLabels value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Recents"
                />
                <BottomNavigationAction
                    label="Favorites"
                />
                <BottomNavigationAction
                    label="Nearby"
                />
                <BottomNavigationAction label="Folder" />} />
            </BottomNavigation>
        </main>)
}