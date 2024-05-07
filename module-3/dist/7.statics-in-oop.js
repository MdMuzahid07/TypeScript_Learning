"use strict";
{
    class Counter {
        // we can also make static method
        static increment() {
            Counter.count = Counter.count + 1;
        }
        ;
        static decrement() {
            Counter.count = Counter.count - 1;
        }
    }
    // we can make static property
    Counter.count = 0;
    ;
    Counter.increment();
    Counter.increment();
    console.log(Counter.count);
}
