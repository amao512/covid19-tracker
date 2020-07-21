import React, { FC } from 'react'
import s from './modes.module.css'

type PropsType = {
    darkMode: boolean
    setDarkMode: (mode: boolean) => void
}

const Modes: FC<PropsType> = ({ darkMode, setDarkMode }) => {

    const changeMode = () => {
        // localStorage.setItem('mode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode)
    }

    return (
        <div className={s.modes}>
            <div className={darkMode ? s.dark : s.light}>
                <span onClick={changeMode} className="material-icons">settings_brightness</span>
            </div>
        </div>
    )
}

export default Modes