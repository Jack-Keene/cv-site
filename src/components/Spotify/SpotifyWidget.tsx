import { useNowPlaying } from '../../hooks'
import React from "react"
import { useEffect, useState } from "react"
import styles from './SpotifyWidget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { getPalleteColors } from '../../lib/quantize'
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import Box from '@mui/material/Box'
import { display } from '@mui/system'
import { CircularProgress } from '@mui/material'


export default function SpotifyWidget() {
  const { data, isLoading } = useNowPlaying()
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [pallete, setPallete] = useState(null)

  useEffect(() => {
    setLoading(isLoading)
    if (!loading) {
      getPalleteColors()
    }
  }, [data, isLoading])

  if (loading) {
    return <div>
      <div className={`${styles.spotify} ${styles.spotifyClosed} ${styles.absolute}`}> <CircularProgress className={`${styles.closed} ${styles.loading}`} /></div></div>
  }

  if (!data) {
    // return <></>
    return <div className={`${styles.spotify} ${styles.spotifyOffline}`}> <FontAwesomeIcon className={`${styles.closed}`} icon={faSpotify as IconProp} /></div>
  }

  const { albumImageUrl, artist, title } = data

  const display = open ? 'block' : 'none'
  const logoDisplay = open ? 'none' : 'block'
  const logoOpacity = open ? '0' : '1'
  const opacity = open ? '1' : '0'
  return (
    <div>
      <canvas className={styles.canvas} id='canvas' ></canvas>
      <Collapse className={styles.absolute} collapsedSize={80} orientation="horizontal" in={open} style={{ opacity: opacity, display: display, transition: '1s'}}>
        <div className={`${styles.spotify} ${styles.spotifyWidget}`} onClick={() => setOpen(!open)}>
          <img id='imgfile' className={styles.albumImage} src={albumImageUrl} onLoad={getPalleteColors} />
          <div className={styles.songInfo}>
            <h5 className={styles.nowPlaying}>Now Playing</h5>
            <h5 className={styles.song}> {title}</h5>
            <h5 className={styles.artist}> {artist}</h5>
          </div>
          <FontAwesomeIcon className={styles.logo} icon={faSpotify as IconProp} />
        </div >
      </Collapse>
      <div className={styles.absolute} style={{ opacity: logoOpacity, display: logoDisplay,  transition: '0.5s'}}>
        <img id='imgfile' className={styles.albumImageClosed} src={albumImageUrl} onLoad={getPalleteColors} />
        <div className={`${styles.spotify} ${styles.spotifyClosed}`} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon className={`${styles.closed}`} icon={faSpotify as IconProp} />
        </div>
      </div>
    </div>
  )
}