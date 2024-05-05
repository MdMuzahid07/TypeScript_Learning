{

    const getComments = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
        const data = await res.json();
        console.log(data);

        return data;
    }

    getComments()



    // create promise

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "https://jsonplaceholder.typicode.com/comments?postId=1";
            if (data) {
                resolve(data)
            } else {
                reject("no data found")
            }
        })
    };


    // calling create calling function

    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return data;
    }

    showData();
































}