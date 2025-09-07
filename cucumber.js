module.exports = {
  default: {
     require: ['tests/steps/**/*.ts', 'features/support/**/*.ts'],
    requireModule: ['ts-node/register'],
    publishQuiet: true,
    format: ['progress', 'html:reports/cucumber.html'],
    paths: ['features/**/*.feature'],
    parallel: 2
  }
};