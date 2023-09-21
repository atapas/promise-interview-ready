1. Let's do it!, f1, f1, f1, f1, in settimeout

Explanation: First console.log outside a function will be executed. Then JS will see setTimeout and place its callback function in the callback queue which will be called later once call stack is empty. Then f1 will be in call stack first time as a result 'f1' will be printed.
Similarly it will be repeated three more times.

2. JavaScript is single-threaded and By default, JavaScript is synchronous

3. Let's do it!, f4, f1, f3, f2
Explanation: First console.log outside a function will be executed. Then JS will see the first setTimeout with callback having f1() and place it in in the callback queue which will be called later once call stack is empty. Then f4 will be invoked which will print 'f4'
Although function f2 came before function f3 to the callback queue but f2 will be executed later because f3 is getting executed in 3 seconds and f2 in 5 seconds.

 4. The job queue gets higher priority than the callback queue.
 5. Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
Explanation: a. cartoon gets invoked and 'Cartoon' gets printed so this is in call stack
b. JS find setTimeout and puts the callback func tom() to callback queue
c. JS find promise and puts it in job queue.
d. jerry() is invoked so now its loaded into call stack which already had cartoon and now has jerry on top of it.
e. once Jerry is printed and call stack is empty, JS will give preference to job queue and bring promise to call stack which will print 'should it be right after Tom, before Jerry?'
f. Finally, it will bring tom to call stack and will print 'Tom' not 'tom' as mentioned above.

6. Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
Explanation: a. cartoon gets invoked and 'Cartoon' gets printed so this is in call stack
b. JS find setTimeout and puts the callback func tom() and doggy() to callback queue
c. JS find first promise and puts it in job queue.
d. JS find second promise and puts it in job queue.
d. jerry() is invoked so now its loaded into call stack which already had cartoon and now has jerry on top of it.
e. once Jerry is printed and call stack is empty, JS will give preference to job queue and bring all promises to call stack which will print 'I am a Promise, right after tom and doggy! Really?' first and then 'I am a Promise after Promise!'
f. Finally, it will bring doggy to call stack and will print 'Doggy'.
g. Finally, it will bring tom to call stack and will print 'Tom'.

7. f4, Boom, Sonic, Albert, f1, f3, f2
8. f4, Sonic, Albert, f1, f2, f3
