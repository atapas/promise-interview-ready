# quizzes

The best way to learn a concept is by practicing it. Here is a bunch of quizzes that will help you to practice the JavaScript Asynchronous programming concepts. I hope you find it helpful. 

In case of any doubts or clarifications, please reach out to me on [Twitter](https://twitter.com/tapasadhikary) over DM.

> 🏗️ This repo is Work In Progress at this time. We appreciate you follow, use, and contribute to it. Liked the work so far? Please give it a star(⭐).

## LICENSE
This project is licensed under [MIT LICENSE](https://github.com/atapas/promise-interview-ready/blob/main/LICENSE).

## CONTRIBUTIONS
Any positive contributions are welcome. Please refer the  [Contribution Guide](https://github.com/atapas/promise-interview-ready/blob/main/CONTRIBUTING.md).

## Answer Validations
- Fork this repo
- Copy the content of this md file to a new file, `<YOUR_GITHUB_USERNAME>_answer.md`.
- Provide your answers and explanations.
- If you want me to look into your answers, explanations to validate, please feel free Create a PR with your md file change. Alternatively, you can DM the file to me on [Twitter](https://twitter.com/tapasadhikary).

## QUIZZES
Let's get started.

### 1. What's the output of this code?

```js
function f1() {
    console.log('f1');
}

console.log("Let's do it!");

setTimeout(function() {console.log('in settimeout');}, 0);

f1();
f1();
f1();
f1();
```
Options are,
- Let's do it!, in settimeout, f1, f1, f1, f1
- Let's do it!, f1, f1, f1, f1, in settimeout
- Let's do it!, f1, , in settimeout, f1, f1, f1

Answer: **Let's do it!, f1, f1, f1, f1, in settimeout**

Explanation:
- "Let's do it!" gets added to Execution stack & gets executed first
- Then f1() functions are called which are added to Execution stack & are executed
- And finally setTimeout() function is called which is a Browser API call added to & executed from Job Queue by callback function



### 2. Which statements are `true`? Select multiple.
- [x] JavaScript is single-threaded
- [ ] By default, JavaScript is synchronous
- [ ] Only promises make JavaScript asynchronous
- [x] All function callbacks are asynchronous
 
### What's the output of the code below?

```js
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function f4() {
    console.log('f4');
}

console.log("Let's do it!");

setTimeout(function() {f1();}, 0);

f4();

setTimeout(function() {f2();}, 5000);

setTimeout(function() {f3();}, 3000);
```
Options are,
- Let's do it!, f4, f1, f3, f2
- Let's do it!, f1, f3, f2, f4
- Let's do it!, f1, f2, f3, f4
- Let's do it!, f1, f4, f2, f3

Answer: **Let's do it!, f4, f1, f3, f2**

Explanation:
- "Let's do it!" is executed by Execution Stack
- f1() calls browser API, so gets added to Callback Queue
- f4() gets added to Execution Stack and is executed
- Event loop finds a callback function f1() in callback queue & executes it
- f2() calls browser API and gets added to Callback Queue. Simialry f3() is addded to callback queue
- Now there is nothing in Execution Stack, so event loop checks & finds f2() & f3() callback functions in callback queue
- f3() goes back into the stack after timeout, and gets executed
- f2() too goes back into the stack after timeout, and gets executed


### 3. Which statement is `true`? Select Only one.
- (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
- (x) The job queue gets higher priority than the callback queue.
- (_) The only job of Event Loop is to manage the Call Stack
- (_) The StackOverflow exception is random.

Answer: **The job queue gets higher priority than the callback queue.**

Explanation: The Job Queue also known as micro task and has higher priority of execution than Callback queue in event loop


### 4. Guess the output

```js
const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

cartoon();
```
Options are,
- Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
- Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
- Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
- Error

Answer: **Cartoon, Jerry, should it be right after Tom, before Jerry?, tom**

Explanation:
- Cartoon() gets executed in the Execution Stack
- tom() calls Browser API and is added to Callback Queue
- "should it be right after Tom, before Jerry?" is a Promise and gets added to Job Queue
- Then Jerry() gets executed in the Execution Stack
- Then the event loop find tom() in callback queue and promise in job queue. Promise is moved to execution stack & executed first due to job queue having high priority
- After promise, event loop finds tom() in callback queue, moves it to execution stack & executes it


### 5. Guess the output

```js
const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise, right after tom and doggy! Really?')
  ).then(resolve => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
}

cartoon();
```
Options are,
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
- Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
- Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
- None of the above.

Answer: **Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom**

Explanation:
- cartoon() is called initially which executes "Cartoon" in execution stack first
- Then tom() & doggy() call Browser API and are moved to Callback Queue
- Now Promises are made and moved to Job Queue
- Now jerry() is moved to & executed in Execution stack
- The event loop now finds promises in Job Queue which has higher priority than Callback Queue, the promises are moved to execution stack and executed.
- "I am a Promise, right after tom and doggy! Really?" and "I am a Promise after Promise!" are executed one after the other
- Now the execution stack is empty and Job queue too is empty, event loop checks and finds tasks in callback queue
- doggy() completes its timeout and is moved to execution stack and is executed
- Now tom() completes its timeout and is moved to execution stack and is executed


### 6. Guess the output

```js
const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Boom');
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```
Options are,
- f4, Boom, Sonic, Albert, f1, f3, f2
- f4, f1, Boom, f2, Sonic, f3, Albert
- f4, Boom, Sonic, Albert, f3, f1, f2
- f4, Boom, Sonic, Albert, f1, f2, f3

Answer: **f4, Boom, Sonic, Albert, f1, f3, f2**

Explanation:
- f4() is moved to execution stack & executed initially
- f1() calls browser API, so it is moved to callback queue
- Promise for Boom is made and is moved to job queue. Since, there is nothing in execution stack, job queue is prioritized and moved back to execution stack for execution
- f2() calls browser API, so it is moved to callback queue
- Another Promise for Sonic is made and moved to job queue. And as there is nothing in execution stack, job queue gets prioritized & promise is moved to execution stack and executed
- f3() calls browser API, and is moved to callback queue
- Another Promise for Albert is made, moved to job queue, gets prioritized, moved to execution stack, gets executed
- Now there is nothing in execution stack, event loops finds f1() & f3() in callback queue
- Both f1() and f3() have same timeout of 0 ms, but since queue is FIFO data strucutre, f1() being added first to the queue, gets moved to execution stack first
- f1() gets executed, f3() follows f1() to execution stack and is executed
- Now f2() completes its timeout and is moved for execution in execution stack

### 7. Guess the output

```js
const f1 = () => console.log('f1');
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
  setTimeout(function() {
      resolve('Boom');
  }, 5000);
}).then(result => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```
Options are,
- f4, f1, Boom, f2, Sonic, f3, Albert
- f4, Boom, Sonic, Albert, f3, f1, f2
- f4, Boom, Sonic, Albert, f1, f2, f3
- f4, Sonic, Albert, f1, f3, f2, Boom

Answer: **f4, Sonic, Albert, f1, f3, f2, Boom**

Explanation:
- f4() is moved to execution stack & executed initially
- f1() calls browser API, so it is moved to callback queue
- Promise for Boom is made and is moved to job queue. Since, it is calling browser API timeout, it is not executed immediately and waits until timeout of 5000 ms
- f2() calls browser API, so it is moved to callback queue
- Promise for Sonic is made and moved to job queue. And as there is nothing in execution stack & it doesn't make any browser API calls, promise is moved to execution stack and executed
- f3() calls browser API, and is moved to callback queue
- Another Promise for Albert is made, moved to job queue, gets prioritized, moved to execution stack, gets executed
- Now there is nothing in execution stack, event loops finds Promise for Boom in job queue but is waiting for timeout to complete. Finds f1(), f2(), f3() in callback queue
- Both f1() and f3() have same timeout of 0 ms while f2() waits for timeout completion, but since queue is FIFO data strucutre, f1() being added first to the queue, gets moved to execution stack first
- f1() gets executed, f3() follows f1() to execution stack and is executed
- Now event loop finds Promise for Boom in Job queue but is still waiting for timeout completion
- Event loop finds f2() in callback queue which completes its timeout and is moved for execution in execution stack and is executed
- Since the execution stack is empty, event loop finds Promise for Boom in job queue and the Promise completes is timeout and is moved to Execution stack is executed












