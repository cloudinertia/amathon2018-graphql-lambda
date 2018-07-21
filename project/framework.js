const mustache = require('mustache')
const fs = require('fs')
const ncp = require('ncp')
const rimraf = require('rimraf')

//load serverless yml template
const sls_template = fs.readFileSync('./sls_config/serverless.yml.mustache','utf-8')
//load all schemas
const schemas =  fs.readdirSync('./schemas').filter ( x => !/.js/.test(x) )
//load custom resources
const resources = fs.readFileSync('./sls_config/resources.yml','utf-8')

const view = {
    "schemas":schemas,
    "resources":resources
}

fs.writeFileSync('./serverless.yaml',mustache.render(sls_template, view));

// copy data from schemas to bundle
(async function copySchemasToBundle() {
    //remove past bundled folder and copy 
    schemas.map( ( item  )=> {
       rimraf(`./bundle/${item}`,async () => {
            await ncp(`./schemas/${item}`,`./bundle/${item}`)
            await ncp(`./templates/index.js`,`./bundle/${item}/index.js`)
            await ncp(`./templates/handler.js`,`./bundle/${item}/handler.js`)
        })
       })
    //copy root schema
    await ncp(`./schemas/RootSchema.js`,`./bundle/RootSchema.js`) 
})()
