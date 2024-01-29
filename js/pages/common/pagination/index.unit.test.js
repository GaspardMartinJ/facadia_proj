import Pagination from "./index"

/**
 * Tests the pagination - expects `ITEMS_PER_PAGE==8` in `js/constants.js`
 * @function Pagination.getNumberOfPages
 */
describe('Pagination Unit Test Suites with pages of 8 elements', () => {
    it('should return something', () => (
        expect(Pagination.getNumberOfPages(12)).toBeDefined()
    ))
    
    it('should return 0 when asking for 0 elements', () => (
        expect(Pagination.getNumberOfPages(0)).toEqual(0)
    ))
    
    it('should return 1 when asking for 7 elements', () => (
        expect(Pagination.getNumberOfPages(7)).toEqual(1)
    ))

    it('should return 5 when asking for 34 elements', () => (
        expect(Pagination.getNumberOfPages(34)).toEqual(5)
    ))
})
