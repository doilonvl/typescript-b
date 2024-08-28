function handleException(errorMsg: string): never {
    throw new Error(errorMsg);
}

handleException("Something went wrong");

function runInfiniteLoop(): never {
    while (true) {
        console.log("I am an infinite loop");
    }
}

// ko tra ve cai gi

type snType = string | number;

