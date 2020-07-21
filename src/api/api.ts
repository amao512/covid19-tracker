import axios from "axios"

const url: string = 'https://covid19.mathdro.id/api'

export type DataType = {
    confirmed: {
        detail: string
        value: number
    }
    deaths: {
        detail: string
        value: number
    }
    lastUpdate: string
    recovered: {
        detail: string
        value: number
    }
}

export const fetchData = async (country: string | null = '') => {
    let changedCountry = url

    if(country){
        changedCountry = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changedCountry)
        
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.log(error)
    }
}

export type CountriesType = {
    iso2: string
    iso3: string
    name: string
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        console.log(countries)
        return countries
    } catch (error) {
        console.log(error)
    }
}