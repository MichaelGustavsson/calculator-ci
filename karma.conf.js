module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    preprocessors: {
      "./calculator/*.js": ["coverage"]
    },
    files: [
      "calculator/*.js", 
      "calculator/*.spec.js"
    ],
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-coverage"
    ],
    reporters: ["progress", "coverage"],
    colors: true,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html', subdir: 'html'}
      ]
    }
  });
};
