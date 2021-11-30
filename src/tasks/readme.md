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
- You can verify your answers with the [answers.md file](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md).

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

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#1-whats-the-output-of-this-code)**

### 2. Which statements are `true`? Select multiple.
- [ ] JavaScript is single-threaded
- [ ] By default, JavaScript is synchronous
- [ ] Only promises make JavaScript asynchronous
- [ ] All function callbacks are asynchronous

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#2-which-statements-are-true-select-multiple)**
 
### 3. What's the output of the code below?

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

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#3-whats-the-output-of-the-code-below)**


### 4. Which statement is `true`? Select Only one.
- (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
- (_) The job queue gets higher priority than the callback queue.
- (_) The only job of Event Loop is to manage the Call Stack
- (_) The StackOverflow exception is random.

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#4-which-statement-is-true-select-only-one)**

### 5. Guess the output

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

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#5-guess-the-output)**

### 6. Guess the output

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

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#6-guess-the-output)**


### 7. Guess the output

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

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#7-guess-the-output)**


### 8. Guess the output

```js
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);

new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);

new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
```
Options are,
- f4, f1, f2, Sonic, f3, Albert
- f4, Sonic, Albert, f3, f1, f2
- f4, Sonic, Albert, f1, f2, f3
- f4, Albert, Sonic, f1, f2, f3

Answer: **[Click here for Answer](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/answers.md#8-guess-the-output)**

