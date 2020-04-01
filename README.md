## Overview

Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. 

A “runtime” converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute.

## Process

In computer science, a process is the instance of a computer program that is being executed.

Node has a global process object with useful methods and information about the current process.

The `process.env` property is an object which stores and controls information about the environment in which the process is currently running.

### Heap

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

## Resource

- Codecademy
- Lynda (via Linkedin Learning)