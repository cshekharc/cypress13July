const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json')
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        excelToJson(filePath){
          const readFile = excelToJson({
            source: fs.readFileSync(filePath) 
          })
          return readFile
        }
      })
    },
    watchForFileChanges: false,
  },
});
