# Answers of the Quzzes

## 1. [What's the output of this code?](https://github.com/atapas/promise-interview-ready/tree/create-answer-file/src/tasks#1-whats-the-output-of-this-code)
Answer: **Let's do it!, f1, f1, f1, f1, in settimeout**
Explanation: 
- "Let's do it!" gets added to Execution stack & gets executed first
- Then f1() functions are called which are added to Execution stack & are executed
- And finally setTimeout() function is called which is a Browser API call added to & executed from Job Queue by callback function



