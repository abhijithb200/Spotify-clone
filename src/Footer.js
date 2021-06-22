import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid,Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumlogo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"/>
                <div className="footer_songInfo">
                    <h4>Music is here</h4>
                    <p>Abhi</p>
                </div>

            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer__green"/>

            </div>
            <div className="footer__right">
            <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon/>
            </Grid>
            <Grid item>
                <VolumeDownIcon/>
            </Grid>
            <Grid item xs>
                <Slider/>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}
