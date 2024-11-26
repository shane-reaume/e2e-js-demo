// nightwatch.conf.js
module.exports = {
  src_folders: ['tests-nw'],
  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};