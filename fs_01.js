var http = require('http')

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello world!')
}).listen(3000)

console.log('Server starter on localhost:3000')
/**
 * end of web server
 */

var fs = require('fs')
var path = require('path')
var args = process.argv.splice(2)
var command = args.shift()

var taskItem = args.join(' ')
var file = path.join(process.cwd(), '/.tasks')
// console.log(taskItem)

switch (command) {
  case 'list':
    listTasks(file)
    break
  case 'add':
    addTask(file, taskItem)
    break
  case 'delete':
    deleteTask(file, taskItem)
    break
  case 'change':
    changeTask(file, taskItem)
    break
  default:
    console.log('Usage: ' + process.argv[0] + ' list|add|delete|change')
}

function loadOrInitFile(file, cb) {
  fs.exists(file, (exists) => {
    var tasks = []
    if (exists) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          throw err
        }

        var data = data.toString() // 文档数据字符串化
        tasks = JSON.parse(data || '[]') // 字符串数据json化
        cb(tasks) // 给callBack函数传递读取的tasks文件内容
      })
    } else {
      cb([]) // 给callBack函数传递空数组
    }
  })
}

function listTasks(file) {
  loadOrInitFile(file, (tasks) => {
    for (var i in tasks) {
      console.log(tasks[i]);
    }
    console.log('...');
  })
}

function storeFile(file, tasks) {
  fs.writeFile(file, JSON.stringify(tasks), 'utf8', (err) => {
    if (err) throw err
    console.log('FILE saved.');
  })
}

function addTask(file, taskItem) {
  loadOrInitFile(file, (tasks) => { // 读取本地tasks文件，写入内存
    tasks.push(taskItem) // 添加一条任务到tasks变量
    storeFile(file, tasks) // 保存tasks变量：写回tasks文件
  })
}

function deleteTask(file, taskItem) {
  loadOrInitFile(file, (tasks) => {
    for (var i in tasks) {
      if (tasks[i] === taskItem) {
        tasks.splice(i, i+1)
      }
    }

    storeFile(file, tasks)
  })
}
