
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test_ng-selector.js'],
  capabilities: {
    browserName: 'chrome',
  }
}
