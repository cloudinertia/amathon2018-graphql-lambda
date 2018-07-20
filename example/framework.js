const mustache = require('mustache')
const fs = require('fs')

const sls_template = fs.readFileSync('./sls_config/serverless.yml.mustache','utf-8')
const schemas =  fs.readdirSync('./src').filter ( x => !/.js/.test(x) )
const resources = fs.readFileSync('./sls_config/resources.yml','utf-8')

const view = {
    "schemas":schemas,
    "resources":resources
}

fs.writeFileSync('./serverless.yaml',mustache.render(sls_template, view))
