import { retrieveWeatherData, weatherCodeToUFN } from "./weatherApi.js"
import { weatherData } from '../../../data/mock-weather-api.js'

describe('Weather from sensor in test env', () => {
    it('should be weatherData', () => {
        expect(retrieveWeatherData()).toBe(weatherData)
    })
})

describe('weatherCodeToUFN function', () => {
    it('should return "Clear sky" for code 0', () => {
        expect(weatherCodeToUFN(0)).toBe('Clear sky')
    })

    it('should return "Mainly clear, partly cloudy, and overcast" for codes 1, 2, 3', () => {
        [1, 2, 3].forEach(code => {
            expect(weatherCodeToUFN(code)).toBe('Mainly clear, partly cloudy, and overcast')
        })
    })

    it('should return "Unknown" for an unknown code', () => {
        expect(weatherCodeToUFN(999)).toBe('Unknown')
    })
})