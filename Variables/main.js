// Const -> When declared can only be initialized once
//var and let variables can be changed after initialization
// But var variables are global scope and let/const variables are local scope
const accountId = 1123467
let accountEmail = "suparno@gmail.com"
var accountPassword = "Pass"
accountCity = "Kolkata"
let accountState // When we declare variables but not assign any values then it is treated as undefined
 
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountState])
