// cucumber.mjs
export default {
  default: {
    require: ['steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],
    format: ['html:reports/report.html'],
    parallel: 1,
    timeout: 60000, 
    worldParameters: {
      timeout: 60000 
    }
  }
}
