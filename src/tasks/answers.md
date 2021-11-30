# Answers of the Quizzes

## 1. [What's the output of this code?](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#1-whats-the-output-of-this-code)

Answer: **Let's do it!, f1, f1, f1, f1, in settimeout**

Explanation: 
- "Let's do it!" gets added to Execution stack & gets executed first
- Then f1() functions are called which are added to Execution stack & are executed
- And finally setTimeout() function is called which is a Browser API call added to & executed from Job Queue by callback function



## 2. [Which statements are `true`? Select multiple.](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#2-which-statements-are-true-select-multiple)

Answer: 
- [X] JavaScript is single-threaded
- [X] By default, JavaScript is synchronous
- [ ] Only promises make JavaScript asynchronous
- [ ] All function callbacks are asynchronous

## 3. [What's the output of the code below?](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#3-whats-the-output-of-the-code-below)

Answer: **Let's do it!, f4, f1, f3, f2**

Explanation:
- "Let's do it!" is executed by Execution Stack
- f1() calls browser API, so gets added to Callback Queue
- f4() gets added to Execution Stack and is executed
- Event loop finds a callback function f1() in callback queue & executes it
- f2() calls browser API and gets added to Callback Queue. Similarly f3() is added to callback queue
- Now there is nothing in Execution Stack, so event loop checks & finds f2() & f3() callback functions in callback queue
- f3() goes back into the stack after timeout, and gets executed
- f2() too goes back into the stack after timeout, and gets executed



## 4. [Which statement is `true`? Select Only one.](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#4-which-statement-is-true-select-only-one)

Answer: **The job queue gets higher priority than the callback queue.**

Explanation: The Job Queue also known as micro task and has higher priority of execution than Callback queue in event loop



## 5. [Guess the output](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#5-guess-the-output)

Answer: **Cartoon, Jerry, should it be right after Tom, before Jerry?, tom**

Explanation:
- Cartoon() gets executed in the Execution Stack
- tom() calls Browser API and is added to Callback Queue
- "should it be right after Tom, before Jerry?" is a Promise and gets added to Job Queue
- Then Jerry() gets executed in the Execution Stack
- Then the event loop find tom() in callback queue and promise in job queue. Promise is moved to execution stack & executed first due to job queue having high priority
- After promise, event loop finds tom() in callback queue, moves it to execution stack & executes it



## 6. [Guess the output](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#6-guess-the-output)

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



## 7. [Guess the output](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#7-guess-the-output)

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
- Both f1() and f3() have same timeout of 0 ms, but since queue is FIFO data structure, f1() being added first to the queue, gets moved to execution stack first
- f1() gets executed, f3() follows f1() to execution stack and is executed
- Now f2() completes its timeout and is moved for execution in execution stack



## 8. [Guess the output](https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md#8-guess-the-output)

Answer: **f4, Sonic, Albert, f1, f2, f3**

Explanation:
- f4() is moved to execution stack & executed initially
- f1() calls browser API, so it is moved to callback queue
- Promise for Sonic is made and moved to job queue. And as there is nothing in execution stack & it doesn't make any browser API calls, promise is moved to execution stack and executed
- f3() calls browser API, and is moved to callback queue
- Another Promise for Albert is made, moved to job queue, gets prioritized, moved to execution stack, gets executed
- Now there is nothing in execution stack, event loops finds f1(), and f3() in callback queue
- Both f1() and f3() have same timeout of 0 ms. Since queue is FIFO data structure, f1() being added first to the queue, gets moved to execution stack first
- f1() gets executed and execute f2() as well, f3() follows f1() and d2() to execution stack and is executed
- Since the execution stack is empty, there is nothing left to execute.

