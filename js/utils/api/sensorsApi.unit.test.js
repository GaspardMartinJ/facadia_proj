import { retrieveSensorsData, retrieveSensorDetails } from "./sensorsApi"
import { homepageData } from '../../../data/mock-homepage-data.js'
import { facadeDetailData } from '../../../data/mock-facade-detail-data.js'

describe('Data from sensor in test env', () => {
    it('should be homepageData', () => {
        expect(retrieveSensorsData()).toBe(homepageData.facades)
    })
})

describe('Details from sensor in test env', () => {
    it('should be facadeDetailData', () => {
        expect(retrieveSensorDetails()).toBe(facadeDetailData.facade)
    })
})
