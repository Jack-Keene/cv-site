'use client'
import LandingPage from '../components/Landing/LandingPage'
import Navbar from '../components/Navbar/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../theme';
import { CssBaseline } from "@mui/material";
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
