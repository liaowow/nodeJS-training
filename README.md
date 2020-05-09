# Overview

Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. 

A “runtime” converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute.

## The Node REPL

`REPL` is a program that loops through 3 different states: 
1. `read` state where the program reads input from a user, 
2. `eval` state where the program evaluates the user’s input, and 
3. `print` state where the program prints out its evaluation to a console. 

Then it `loop`s through these states again.

When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command `node` (with nothing after it) into the terminal and hitting `enter`.


## Process

In computer science, a process is the instance of a computer program that is being executed.

Node has a global process object with useful methods and information about the current process.

The `process.env` property is an object which stores and controls information about the environment in which the process is currently running.

## Heap

`Heap` can mean different things in different contexts: a heap can refer to a specific data structure, but it can also refer to the a block of computer memory.

## Modules

A module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files and combined through requiring them where needed using the `require()` function.

Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns into manageable chunks.

### Core Modules

Core modules are required by passing a string with the name of the module into the `require()` function:
```js
let events = require('events')
```

### Local Modules

The `require()` function will first check to see if its argument is a core module, if not, it will move on to different attempts to locate it.

Unlike when we require core modules which are required in with the name of the module as a string, local modules are required by passing in the path to the module.
```js
let Dog = require('./dog')
```

## Event-Driven Architecture

Node provides an `EventEmitter` class which we can access by requiring in the events core module:
```js
// Require in the 'events' core module
let events = require('events');

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
```

Each event emitter instance has an `.on()` method which assigns a listener callback function to a named event. The `.on()` method takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.

Each event emitter instance also has an `.emit()` method which announces a named event has occurred. The `.emit()` method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function.

```js
let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'
```

## User Input/Output

In the Node environment, the console is the terminal, and the `console.log()` method is a “thin wrapper” on the `.stdout.write()` method of the `process` object. `stdout` stands for standard output.

```js
process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");
```

In Node, we can also receive input from a user through the terminal using the `stdin.on()` method on the process object:
```js
process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
```

Here, we were able to use `.on()` because under the hood `process.stdin` is an instance of `EventEmitter`. When a user enters text into the terminal and hits enter, a `'data'` event will be fired and our anonymous listener callback will be invoked. The `userInput` we receive is an instance of the Node `Buffer` class, so we convert it to a string before printing.

## Errors

The Node environment has all the standard JavaScript errors such as `EvalError`, `SyntaxError`, `RangeError`, `ReferenceError`, `TypeError`, and `URIError` as well as the JavaScript `Error` class for creating new error instances.

Many asynchronous Node APIs use <i>error-first callback functions</i>: callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be `undefined`.

```js
const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
     // err was falsy
      console.log(`There was NO error. Event data: ${data}`);
  }
}
```

## Filesystem

The Node `fs` core module is an API for interacting with the file system. It was modeled after the POSIX standard for interacting with the filesystem.

Each method available through the `fs` module has a synchronous version and an asynchronous version. One method available on the `fs` core module is the `.readFile()` method which reads data from a provided file:
```js
const fs = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);
```

- We required in the `fs` core module.
- We define an error-first callback function which expects an error to be passed as the first argument and data as the second. If the error is present, the function will print `Something went wrong: ${err}`, otherwise, it will print `Provided file contained: ${data}`.
- We invoked the `.readFile()` method with three arguments:
    1. The first argument is a string that contains a path to the file `file.txt`.
    2. The second argument is a string specifying the file’s character encoding (usually `'utf-8'` for text files).
    3. The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of `file.txt` into the provided callback as its second argument.

## Readable Streams

Streaming data is often preferable since you don’t need enough RAM to process all the data at once nor do you need to have all the data on hand to begin processing it.

One of the simplest uses of streams is reading and writing to files line-by-line.

To read files line-by-line, we can use the `.createInterface()` method from the readline core module. `.createInterface()` returns an EventEmitter set up to emit 'line' events:
```js
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});
```

- We require in the `readline` and `fs` core modules.
- We assign to `myInterface` the returned value from invoking `readline.createInterface()` with an object containing our designated input.
- We set our input to `fs.createReadStream('text.txt')` which will create a stream from the text.txt file.
- Next we assign a listener callback to execute when `line` events are emitted. A `'line'` event will be emitted after each line from the file is read.
- Our listener callback will log to the console `'The line read: [fileLine]'`, where `[fileLine]` is the line just read.

## Writable Streams

We can create a writeable stream to a file using the `fs.createWriteStream()` method:
```js
const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();
```

- We set the output file as `output.txt`. 
- Then we `.write()` lines to the file. 
- Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. 
    - We can indicate the end of a writable stream with the `.end()` method.

## Create an HTTP Server

The `http` module contains functions which simplify interacting with HTTP and streamline receiving and responding to requests.

The `http.createServer()` method returns an instance of an `http.server`. An `http.server` has a method `.listen()` which causes the server to “listen” for incoming connections.

When we run `http.createServer()` we pass in a custom callback function (often referred to as the `requestListener`). This callback function will be triggered once the server is listening and receives a request.

Here's how the `requestListener` callback function works:
- The function expects two arguments: a `request` object and a `response` object.
- Each time a request to the server is made, Node will invoke the provided `requestListener` callback function, passing in the `request` and `response` objects of the incoming request.
- Request and response objects come with a number of properties and methods of their own, and within the `requestListener` function, we can access information about the request via the request object passed in.
- The `requestListener` is responsible for setting the response header and body.
- The `requestListener` must signal that the interaction is complete by calling the `response.end()` method.

```js
const http = require('http');

let requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain' });
  response.write('Hello World!\n');
  response.end();
};

const server = http.createServer(requestListener);

server.listen(3000);
```

- We required in the `http` core module.
- We created a `server` variable assigned to the return value of the `http.createServer()` method.
- We invoked `http.createServer()` with our `requestListener` callback. 
    - This is similar to running the `.on()` of an `EventEmitter`: the `requestListener` will execute whenever an HTTP request is sent to the server on the correct port.
- Within the `requestListener` callback, we make changes to the response object, `response`, so that it can send the appropriate information to the client sending the request. 
    - The status code 200 means that no errors were encountered. 
    - The header communicates that the file type is text, rather than something like audio or compressed data.
- The last line starts the server with the port 3000. 
    - Every server on a given machine specifies a unique port so that traffic can be correctly routed.


## My Learning Resource

- Codecademy
- Lynda (via Linkedin Learning)