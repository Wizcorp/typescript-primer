// Types provided by type definition file
import { sayHi } from './sayHi'
sayHi('hi')

// You can type dependencies too!
import leftpad = require('leftpad')
console.log(leftpad('hey', 10))

// Types provided by @types/node
console.log(process.platform)
