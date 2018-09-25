class test {
    constructor() {
        const list:number[] = [1, 3, 5];
        list['text'] = '1';
        for (const value in list) {
            console.log(value);
        }
    }
}

new test();