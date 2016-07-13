var swallowLogs = module.exports = function swallowLogs(proc) {
  var consoleLog = console.log
  console.log = () => void 0
  proc()
  console.log = consoleLog
}

