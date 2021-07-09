import React, { useState } from 'react'

const AutoPlayFun = () => {

    const [autoPlay, setAutoPlay] = useState(true)
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleAutoplay = () => {
        setAutoPlay(!autoPlay)
    }

    const toggleDarkTheme = (e) => {
        setDarkTheme(e)
    }

    return { autoPlay, toggleAutoplay, toggleDarkTheme, darkTheme }
}

export default AutoPlayFun
