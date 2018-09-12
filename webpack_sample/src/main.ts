import { Sub } from './sub';

class Main {
    private sub: Sub
    constructor() {
        this.sub = new Sub();
        const body = document.getElementsByTagName('body');
        const element = body.item(0);
        const div = document.createElement('div');
        div.innerHTML = '「こんにちは」を他言語に変換します。<br>好きな言語を入れてください。<br>※ちなみに対応しているのは日本語、英語、スペイン語、ドイツ語です。<br>';
        const input = document.createElement('input');
        input.id = 'country'
        const button = document.createElement('button');
        button.textContent = '変換';
        button.addEventListener('click', () => {
            this.transtrationGreeting(document.getElementById('country')['value']);
        });
        div.appendChild(input);
        div.appendChild(button);
        element.appendChild(div);
    }

    public transtrationGreeting(country: string) {
        const addDiv = document.createElement('div');
        addDiv.innerHTML = `こんにちはを${country}で言うと${this.sub.hello(country)}`;
        document.getElementsByTagName('body').item(0).appendChild(addDiv);
    }
}
const main = new Main();
