module.exports = {
    testConcurrency: 5,
    apiKey: 'KDfyZZ5SlkMexpbzkvsC1qjL2Lzoh5y4993PQmBTcS7M110',
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 700, height: 500, name: 'firefox'},
        {width: 1600, height: 1200, name: 'ie11'},
        {width: 1024, height: 768, name: 'edgechromium'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    showLogs: true,
    failCypressOnDiff: false
}
