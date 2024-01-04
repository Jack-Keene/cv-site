import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { faEllipsis, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './Menu.module.css'
import { Grid, styled, Paper } from '@mui/material';
import { display } from '@mui/system';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Menu() {

    const [open, setOpen] = useState(false)

    const Item = styled(Paper)(({ theme }) => ({
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        boxShadow: 'none'
    }));

    const list = (
        <Box sx={{ width: '100vw', height: '100vh' }}>
            <Grid
                container
                onClick={() => setOpen(!open)}
                onKeyDown={() => setOpen(!open)}
                className={styles.menu}
            >
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                    <h2>Home</h2>
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                    <h2>About</h2>
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
                    <h2>Contact</h2>
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'space-around', display: 'flex', alignItems: 'center', }}>
                    <h1 className={styles.logo}><FontAwesomeIcon icon={faEnvelope as IconProp} /></h1>
                    <h1 className={styles.logo}><FontAwesomeIcon icon={faGithub as IconProp} /></h1>
                    <h1 className={styles.logo}><FontAwesomeIcon icon={faLinkedin as IconProp} /></h1>
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <div>
            <Button onClick={() => setOpen(!open)} className={styles.button}>
                <FontAwesomeIcon icon={faEllipsis as IconProp} />
            </Button>
            <Drawer
                anchor={'top'}
                open={open}
                onClose={() => setOpen(!open)}
            >

                {list}
            </Drawer>
        </div>
    );
}