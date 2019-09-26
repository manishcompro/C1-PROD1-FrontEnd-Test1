var pkg = require('./package.json');


//var seleniumServer = require('selenium-server');
var path = require('path');
var chromedriver = require('chromedriver');
var saucelabsUserName = process.env.Saucelabs_USER_NAME;
var saucelabsAccessKey = process.env.Saucelabs_ACCESS_KEY;
var browserstackUserName = process.env.CUP_Browserstack_USER_NAME;
var browserstackAccessKey = process.env.CUP_Browserstack_ACCESS_KEY;

module.exports = function (grunt) {

    grunt.initConfig({
        nightwatch: {
            options: {
                standalone: true,
                jar_version: '2.53.1',
                jar_path: 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar',
                config_path: './nemoReset/nightwatch.conf.js', // Update the path based on your application
                custom_commands_path : "",
                src_folders : ['./nemoReset/specs/basicTest.spec.js'], // Update the path based on your application
                page_objects_path : './nemoReset/pages/',   // path where page object files will be loaded from. Update the path based on your application
                globals_path : './nemoReset/config/index.js', // path of an external globals module which will be loaded and made available to the test as a property globals on the main client instance. Update the path based on your application
                test_runner : {
                    type : 'mocha',
                    options : {
                        ui : 'bdd',
                        reporter : 'mochawesome',
                        reporterOptions: {
                            reportName: 'index',
                            reportDir: './reports'
                        }
                    }},
                test_settings : {
                    chrome: {selenium_host : '127.0.0.1',
                        selenium_port : 4444,
                        end_session_on_fail: false,
                        screenshots : {
                            enabled : true,
                            on_failure : false,
                            path : 'screenshots'
                        },

                        desiredCapabilities : {       // specify browser name along with other capabilities
                            browserName : 'chrome',
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            'chromeOptions' : {
                                "args" : ["start-maximized"]
                            }},
                        cli_args : {
                         //   'webdriver.chrome.driver' : 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
                         'webdriver.chrome.driver': chromedriver.path
                        }},
                    firefox: {selenium_host : '127.0.0.1',
                        selenium_port : 4444,
                        end_session_on_fail: false,
                        screenshots : {
                            enabled : true,
                            on_failure : false,
                            path : 'screenshots'
                        },

                        desiredCapabilities : {       // specify browser name along with other capabilities
                            browserName : 'firefox',
                            javascriptEnabled : true,
                            acceptSslCerts : true}},
                    detailedsaucelabs : {
                        selenium_host: 'ondemand.saucelabs.com',
                        selenium_port: '80',
                        end_session_on_fail: false,
                        screenshots : {
                            enabled : true,
                            on_failure : false,
                            path : 'screenshots'
                        },
                        username : saucelabsUserName,
                        access_key : saucelabsAccessKey,
                        desiredCapabilities : {       // specify browser name along with other capabilities
                            name: 'SmokeTest',
                            browserName : 'chrome',
                            version: "60",
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            platform: 'Win8',
                            "screen-resolution": '1920x1200'
                        }
                    },
                    smokeTestHeadless: {selenium_host : '127.0.0.1',
                        selenium_port : 4444,
                        end_session_on_fail: false,
                        src_folders : ['./nemoReset/specs/smokeTestProd.spec.js'], // Update the path based on your application
                        screenshots : {
                            enabled : true,
                            on_failure : false,
                            path : 'screenshots'
                        },
                        desiredCapabilities : {  // specify browser name along with other capabilities
                            browserName : 'chrome',
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            'chromeOptions' : {
                                 "args" : ['headless']
                               // "args" : ['start-maximized']                                
                            }},
                        cli_args : {
                          //  'webdriver.chrome.driver' : 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
                          'webdriver.chrome.driver': chromedriver.path
                        }},
                        smokeTest: {selenium_host : '127.0.0.1',
                        selenium_port : 4444,
                        end_session_on_fail: false,
                        src_folders : ['./nemoReset/specs/smokeTestProd.spec.js'], // Update the path based on your application
                        screenshots : {
                            enabled : true,
                            on_failure : false,
                            path : 'screenshots'
                        },
                        desiredCapabilities : {  // specify browser name along with other capabilities
                            browserName : 'chrome',
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            'chromeOptions' : {
                                 //"args" : ['headless']
                                "args" : ['start-maximized']                                
                            }},
                        cli_args : {
                          //  'webdriver.chrome.driver' : 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
                          'webdriver.chrome.driver': chromedriver.path
                        }},
                        smokeTest2: {selenium_host : '127.0.0.1',
                        selenium_port : 5554,
                        end_session_on_fail: false,
                        src_folders : ['./nemoReset/specs/supportAdmin.spec.js'], // Update the path based on your application
                        screenshots : {
                            enabled : true,
                            on_failure : false,
                            path : 'screenshots'
                        },
                        desiredCapabilities : {  // specify browser name along with other capabilities
                            browserName : 'chrome',
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            'chromeOptions' : {
                                 //"args" : ['headless']
                                "args" : ['start-maximized']                                
                            }},
                        cli_args : {
                          //  'webdriver.chrome.driver' : 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
                          'webdriver.chrome.driver': chromedriver.path
                        }},
                    smokeTestSaucelabs : {
                        selenium_host: 'ondemand.saucelabs.com',
                        selenium_port: '80',
                        end_session_on_fail: false,
                        src_folders : ['./nemoReset/specs/basicTest.spec.js'], // Update the path based on your application
                        screenshots : {
                            enabled : true,
                            on_failure : false,
                            path : '/screenshots'
                        },
                        username : saucelabsUserName,
                        access_key : saucelabsAccessKey,
                        desiredCapabilities : {       // specify browser name along with other capabilities
                            name: 'appSmokeTest',
                            browserName : 'chrome',
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            platform: 'Win8',
                            "screen-resolution": '1920x1080'
                        }
                    },
                    smokeTestBrowserstack : {
                        selenium_host: 'hub-cloud.browserstack.com',
                        selenium_port: '80',
                        end_session_on_fail: false,
                        src_folders : ['./nemoReset/specs/smokeTestProd.spec.js'],
                        screenshots : {
                            enabled : true,
                            on_failure : true,
                            path : 'screenshots'
                        },
                        username : browserstackUserName,
                        access_key : browserstackAccessKey,
                        desiredCapabilities : {       // specify browser name along with other capabilities
                            name: 'prodSmokeTest',
                            javascriptEnabled : true,
                            acceptSslCerts : true,
                            'os': 'Windows',
                            'os_version': '8.1',
                            'browser': 'Chrome',
                            'browser_version': '60.0',
                            'chromeOptions' : {
                                "args" : ["start-maximized"]
                            },
                            'resolution': '1920x1080',
                            'browserstack.debug':true,
                            'browserstack.networkLogs':true
                        }
                    }
                }
            }
        }
    });

    //Load grunt Tasks
    grunt.loadNpmTasks('grunt-nightwatch');

    grunt.registerTask('default', ['test']);

    //Grunt task to run nightwatch tests with test parameter
    grunt.registerTask('test', 'Runs e2e tests', function() {
        var testParam = grunt.option('testParam');
        grunt.task.run('nightwatch:' + testParam)
    });

};
