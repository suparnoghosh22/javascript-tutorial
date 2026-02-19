JavaScript is Synchronous and Single-Threaded

Execution Context:
Code is executed Line by Line
First a Call Stack is created, then Global Execution Context is created
Then we have Memory Creation Phase and Execution Phase.

In Memory Creation phase all variables are allocated in memory and assigned
undefined value, the actual value is assigned in Execution Phase

Each function in JS has its separate Execution Context

EVENT LOOP:

The Event Loop in JavaScript enables the usage of asynchronous programming, since JS
is single threaded, it uses the Event Loop to off load background tasks 
like Fetching data from API, handling user events or set timeouts without pausing
the normal execution of the code.

There are two Queues: Callback Queue(Task Queue), High Priority Queue(Microtask Queue)

Whenever a setTimeout, setInterval, DOM events or any fetch API call is triggered
these tasks are pushed to Call back queue, if code also consist of a Promises it 
is loaded to Microtask queue. Everytime first Microtask queue is checked and then
Call back queue and executes those in background.

After the normal codes are executed and call stack is empty, the Event Loop continuously
checks these Queues if any task is pending if pending then it checks if call stack is 
empty. If call stack is empty then these call backs are pushed to Call Stack, first
from Microtask queue and then from Call back queue.