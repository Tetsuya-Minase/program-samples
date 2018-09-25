import { fromEvent } from 'rxjs';
import { scan, mapTo, throttleTime, map } from 'rxjs/operators';

window.onload = () => {
    initialSample();
    pure();
    flow();
    value();
}

const initialSample = () => {
    // 既存のボタンイベント設定
    const button1 = document.getElementById('button1');
    button1.addEventListener('click', () => {
        console.log('Cliked!');
    });

    // RxJSを用いたボタンイベント設定
    const button2 = document.getElementById('button2');
    fromEvent(button2, 'click').subscribe(
        () => {
            console.log('RxJSClicked!!');
        }
    );
}

const pure = () => {
    // 既存
    let count = 0;
    const button3 = document.getElementById('button3');
    button3.addEventListener('click', () => {
        console.log(`oldCount:${++count}`);
    });

    // RxJS
    const button4 = document.getElementById('button4');
    fromEvent(button4, 'click').pipe(
        mapTo(1),
        scan((count, value) => count + value, 0)
    )
        .subscribe(
            (count) => {
                console.log(`RxJSCount:${count}`);
            }
        );
}

const flow = () => {
    // 既存
    let count = 0;
    const rate = 1000;
    let lastClick = Date.now() - rate;
    const button5 = document.getElementById('button5');
    button5.addEventListener('click', () => {
        if (Date.now() - lastClick >= rate) {
            console.log(`Clicked ${++count} times`);
            lastClick = Date.now();
        }
    });

    // RxJS
    const button6 = document.getElementById('button6');
    fromEvent(button6, 'click').pipe(
        throttleTime(1000),
        mapTo(1),
        scan(count => count + 1, 0)
    )
        .subscribe(count => console.log(`Clicked by RxJS ${count} times`));
}

const value = () => {
    // 既存
    let count = 0;
    const button7 = document.getElementById('button7');
    button7.addEventListener('click', (event) => {
        count += event.clientX;
        console.log(`position x: ${count}`)
    });

    // RxJS
    const button8 = document.getElementById('button8');
    fromEvent(button8, 'click').pipe(
        map(event => event['clientX']),
        scan((count, clientX) => count + clientX, 0)
    )
        .subscribe(count => console.log(`position x by RxJS: ${count}`));
}