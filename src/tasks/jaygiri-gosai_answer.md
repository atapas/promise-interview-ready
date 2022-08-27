# quizzes

The best way to learn a concept is by practicing it. Here is a bunch of quizzes that will help you to practice the JavaScript Asynchronous programming concepts. I hope you find it helpful.

In case of any doubts or clarifications, please reach out to me on [Twitter](https://twitter.com/tapasadhikary) over DM.

> 🏗️ This repo is Work In Progress at this time. We appreciate you follow, use, and contribute to it. Liked the work so far? Please give it a star(⭐).

## LICENSE

This project is licensed under [MIT LICENSE](https://github.com/atapas/promise-interview-ready/blob/main/LICENSE).

## CONTRIBUTIONS

Any positive contributions are welcome. Please refer the [Contribution Guide](https://github.com/atapas/promise-interview-ready/blob/main/CONTRIBUTING.md).

## Answer Validations

- Fork this repo
- Copy the content of this md file to a new file, `<YOUR_GITHUB_USERNAME>_answer.md`.
- Provide your answers and explanations.
- If you want me to look into your answers, explanations to validate, please feel free Create a PR with your md file change. Alternatively, you can DM the file to me on [Twitter](https://twitter.com/tapasadhikary).
- You can verify your answers with the [answers.md file](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md).

## QUIZZES

Let's get started.

### 1. What's the output of this code?

```js
function f1() {
  console.log("f1");
}

console.log("Let's do it!");

setTimeout(function () {
  console.log("in settimeout");
}, 0);

f1();
f1();
f1();
f1();
```

Options are,

- Let's do it!, in settimeout, f1, f1, f1, f1
- Let's do it!, f1, f1, f1, f1, in settimeout
- Let's do it!, f1, , in settimeout, f1, f1, f1

Answer: **Option 2**
Explanations:

- Javascript starts executing sequentially so prints the "Let's do it!" first
- After that, there is a web/browser API call so the callback function goes to the callstack queue & executes the f1 function 4 times.
- On completion of call stack, the function from call stack queue gets executed.
  **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#1-whats-the-output-of-this-code)**

### 2. Which statements are `true`? Select multiple.

- [x] JavaScript is single-threaded
- [x] By default, JavaScript is synchronous
- [ ] Only promises make JavaScript asynchronous
- [ ] All function callbacks are asynchronous

Answer: **First two options.**
Explanations: Javascript is a single threaded language and executes the code written in sequence. It uses callstack mechanism to handle asynchronous behaviour.
**[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#2-which-statements-are-true-select-multiple)**

### 3. What's the output of the code below?

```js
function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}

function f4() {
  console.log("f4");
}

console.log("Let's do it!");

setTimeout(function () {
  f1();
}, 0);

f4();

setTimeout(function () {
  f2();
}, 5000);

setTimeout(function () {
  f3();
}, 3000);
```

Options are,

- Let's do it!, f4, f1, f3, f2
- Let's do it!, f1, f3, f2, f4
- Let's do it!, f1, f2, f3, f4
- Let's do it!, f1, f4, f2, f3

Answer: **Option 1**
Explanations:

- First, it executes the "Let's do it!"
- Second, the execution of f1() moves to callstack queue as it is a callback function of web/browser API.
- Third, it executes f4() and prints the f4.
- Then it moves the f2() & f3() oth to callstack queue as it is a callback function of web/browser API.
- Now, the callstack is empty as all the function executions are completed and start executing the functions available in the callstack queue.
- It executes the f1() as it was at the first place in the callstack with 0 second delay.
- Next available functions available to executes in the callstack queue are f2() & f3().
- In the f2() & f3(), the f3() methods timeout is less then f2(). So, it executes f3() & then f2()
  **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#3-whats-the-output-of-the-code-below)**

### 4. Which statement is `true`? Select Only one.

- (\_) JavaScript Function Execution Stack(Call Stack) never gets empty.
- (\_) The job queue gets higher priority than the callback queue.
- (\_) The only job of Event Loop is to manage the Call Stack
- (\_) The StackOverflow exception is random.

Answer: **Option 2**
Explanations: The job queue get executes prior to callback queue as it not dependent on any browser API.
**[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#4-which-statement-is-true-select-only-one)**

### 5. Guess the output

```js
const tom = () => console.log("Tom");

const jerry = () => console.log("Jerry");

const cartoon = () => {
  console.log("Cartoon");

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve("should it be right after Tom, before Jerry?")
  ).then((resolve) => console.log(resolve));

  jerry();
};

cartoon();
```

Options are,

- Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
- Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
- Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
- Error

Answer: **Option 1**
Explanations:

- The execution starts with executing cartoon().
- It executes the first line of cartoon().i.e. Cartoon
- Next line is going to set the execution of tom() in callstack queue as it is a callback function of web/browser API
- The promise queues the execution of promise in job queue.
- The jerry() method executes and prints Jerry.
- The callstack is empty now and we have 1 function to execute in callstack queue & 1 function to execute in job queue. The job queue gets higher priority than the callback queue. So, it executes the job queue and prints should it be right after Tom, before Jerry?
- At the end, the callstack queue gets executed and prints tom
  **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#5-guess-the-output)**

### 6. Guess the output

```js
const tom = () => console.log("Tom");
const jerry = () => console.log("Jerry");
const doggy = () => console.log("Doggy");

const cartoon = () => {
  console.log("Cartoon");

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve("I am a Promise, right after tom and doggy! Really?")
  ).then((resolve) => console.log(resolve));
  new Promise((resolve, reject) =>
    resolve("I am a Promise after Promise!")
  ).then((resolve) => console.log(resolve));

  jerry();
};

cartoon();
```

Options are,

- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
- Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
- Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
- Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
- None of the above.

Answer: **Option 3**
Explanations:

- The execution starts with executing cartoon().
- It executes the first line of cartoon().i.e. Cartoon
- Next line is going to set the execution of tom() in callstack queue with 50 sec of delay as it is a callback function of web/browser API
- Next line is going to set the execution of doggy() in callstack queue with 30 sec of delay as it is a callback function of web/browser API
- The promise queues the execution of promise in job queue.
- Another promise queues the execution of promise in job queue.
- The jerry() method executes and prints Jerry.
- The callstack is empty now and we have 2 function to execute in callstack queue & 2 function to execute in job queue. The job queue gets higher priority than the callback queue. So, it executes the job queues and prints the first promise & then executes another promise and prints the second promise.
- At the end, the callstack queue gets executed and prints doggy & tom. The doggy is having higher priority in the callstack as the delay is less than tom.
  **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#6-guess-the-output)**

### 7. Guess the output

```js
const f1 = () => console.log("f1");
const f2 = () => console.log("f2");
const f3 = () => console.log("f3");
const f4 = () => console.log("f4");

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
  resolve("Boom");
}).then((result) => console.log(result));

setTimeout(f2, 2000);

new Promise((resolve, reject) => {
  resolve("Sonic");
}).then((result) => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
  resolve("Albert");
}).then((result) => console.log(result));
```

Options are,

- f4, Boom, Sonic, Albert, f1, f3, f2
- f4, f1, Boom, f2, Sonic, f3, Albert
- f4, Boom, Sonic, Albert, f3, f1, f2
- f4, Boom, Sonic, Albert, f1, f2, f3

Answer: **Option 1**
Explantions:

- At first the f4() function get added to callstack and prints the f4 and gets removed from callstack
- Next, it sets the f1 method to callstack queue as it is defined as a callback function for web/browser API with 0 second of delay.
- Next, it sets the promise in the job queue
- Next, it sets f2 method to callstack queue as it is defined as a callback function for web/browser API with 2 seconds of delay.
- Next, it sets the promise in the job queue
- Next, it sets f3 method to callstack queue as it is defined as a callback function for web/browser API with 0 seconds of delay.
- Next, it sets the promise in the job queue
- As the callstack is empty and we have 3 promises to executes in the job queue. It start executing the job queue in sequence and prints Boom Sonic Albert
- After completion of job queue, the event loop starts executing the call stack queue and prints f1 f3 f2

**[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#7-guess-the-output)**

### 8. Guess the output

```js
const f1 = () => {
  console.log("f1");
  f2();
};
const f2 = () => console.log("f2");
const f3 = () => console.log("f3");
const f4 = () => console.log("f4");

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
  resolve("Sonic");
}).then((result) => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
  resolve("Albert");
}).then((result) => console.log(result));
```

Options are,

- f4, f1, f2, Sonic, f3, Albert
- f4, Sonic, Albert, f3, f1, f2
- f4, Sonic, Albert, f1, f2, f3
- f4, Albert, Sonic, f1, f2, f3

Answer: **Option 3**
Explantions:

- At first the f4() function get added to callstack and prints the f4 and gets removed from callstack
- Next, it sets the f1 method to callstack queue as it is defined as a callback function for web/browser API with 0 second of delay.
- Next, it sets the promise in the job queue
- Next, it sets f3 method to callstack queue as it is defined as a callback function for web/browser API with 0 seconds of delay.
- Next, it sets the promise in the job queue
- As the callstack is empty and we have 2 promises to executes in the job queue. It start executing the job queue in sequence and prints Sonic Albert
- After completion of job queue, the event loop starts executing the call stack queue and prints f1 & calls f2 to print f2
- At the the end the f3 get executed.
  **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#8-guess-the-output)**
