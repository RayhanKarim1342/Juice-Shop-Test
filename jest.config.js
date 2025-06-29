// jest.config.js
module.exports = {
    testEnvironment: 'node',
    coverageProvider: 'v8',
    collectCoverage: true,
    collectCoverageFrom: [
        'lib/**/*.js',
        'routes/**/*.js'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'lcov', 'text']
};