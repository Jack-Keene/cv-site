'use client'
import LandingPage from '../components/Landing/LandingPage'
import Navbar from '../components/Navbar/Navbar'
import SpotifyWidget from '../components/Spotify/SpotifyWidget'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { muiTheme } from '../theme';
import { CssBaseline } from "@mui/material";
import { IBM_Plex_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import styles from './page.module.css'

const theme = createTheme(muiTheme);
// const ibm = IBM_Plex_Mono({
//   subsets: ['latin'],
//   weight: ['400', '700']
// })
// const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <body className={styles.body}>
      <Navbar />
      <LandingPage />
      <CssBaseline />
      </body>
     
    </ThemeProvider>

  )
}
