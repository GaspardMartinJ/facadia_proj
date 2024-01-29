import { isInTestEnv } from "./index"

/**
 * Tests the env
 * @function isInTestEnv
 */
describe('Env test in test env', () => {
    it('should be false', () => {
        process.env.NODE_ENV = 'production'
        expect(isInTestEnv()).toBeFalsy()
    })
    it('should be true', () => {
        process.env.NODE_ENV = 'test'
        expect(isInTestEnv()).toBeTruthy()
    })
})
