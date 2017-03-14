var markdown = require('markdown')
var fs = require('fs')
var path = require('path')

var file = path.join(process.cwd(), '/md_in.md')
var file2 = path.join(process.cwd(), '/md_out.html')

function loadOrInitFile(file, cb) {
  fs.exists(file, (exists) => {
    var html = ''
    var json = ''
    if (exists) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          throw err
        }

        // var data = data.toString() // markdown字符串化
        html = markdown.parse(data || '') // 字符串数据html化
        // json = JSON.parse(html)
        // console.log(html)

        cb(html)
      })
    } else {
      cb([])
    }
  })
}

function storeFile(file, html) {
  fs.writeFile(file, html, 'utf8', (err) => {
    if (err) throw err
    console.log('FILE saved.');
  })
}

function convert(file, file2) {
  loadOrInitFile(file, (html) => {
    storeFile(file2, html)
  })
}

convert(file, file2)
// loadOrInitFile(file, () => {})
