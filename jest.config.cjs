module.exports = {
    testEnvironment: 'node',
    moduleNameMapper: {
        '\\.(css|less|scss|sass|png|svg|jpg|jpeg|gif)$':
            '<rootDir>/tests/__mocks__/fileMock.js',
    },
};
