---
id: mp3
title: MP3_HOSTING
---
import './mp3.scss'; 

export const MP3 = () => {
    const mp3 = ['Céline-Dion-Baby.mp3','J-Lisk-NYC.mp3','enya-echoes-in-rain.mp3','Fredji-Blue-Sky.mp3']
    return mp3.map(m => {
        return <div>
            🔥 <a href={ `/mp3/${m}` }>{m}</a>
        </div>
    })
}

<MP3/>
