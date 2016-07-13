var swallowLogs = module.exports = function swallowLogs(proc) {
  var consoleLog = console.log
  var consoleError = console.error
  console.log = () => void 0
  console.error = () => void 0
  proc()
  console.log = consoleLog
  console.error = consoleError
}

