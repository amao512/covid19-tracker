import React, { FC } from 'react'
import s from './countryPicker.module.css'
import { FormControl } from '@material-ui/core'
import cn from 'classnames'
import { CountriesType } from '../../api/api'

type PropsType = {
    countries: Array<CountriesType>
    handleCountry: (country: string) => void
    darkMode: boolean
}

const CountryPicker: FC<PropsType> = ({ countries, handleCountry, darkMode }) => {
    return (
        <FormControl className={!darkMode ? s.countryPicker : s.darkPicker}>
            <select defaultValue='' 
                          onChange={e => handleCountry(e.target.value)}
                          className={cn(s.select, darkMode && s.darkSelect)}
            >
                <option value=''>Global</option>
                {countries.map((country, index) => (
                    <option key={index}>{country.name}</option>
                ))}
            </select>
        </FormControl>
    )
}

export default CountryPicker