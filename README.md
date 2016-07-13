# node-swallow-logs

Need to disable log output for just a little bit? Wrap that procedure in this function which will momentarily overwrite `console.log` and then set it back after the procedure is done.

## Get started
```
npm install swallow-logs
```

## Usage
```javascript
const swallowLogs = require('swallow-logs')
swallowLogs(() => {
  console.log('this will not get logged')  
}
console.log('but this will')
```
