{


    class Counter {
        // we can make static property
        static count: number = 0;


        // we can also make static method
        static increment() {
            Counter.count = Counter.count + 1;
        };

        static decrement() {
            Counter.count = Counter.count - 1;
        }

    };


    Counter.increment();
    Counter.increment();
    console.log(Counter.count);

























}