export class Sub {
    private greeting = {
        '日本語': 'こんにちは',
        '英語': 'Hello',
        'スペイン語': 'Hola',
        'ドイツ語': 'Hallo'
    }

    constructor () { }

    public hello(country: string) {
        return this.greeting[country];
    }
}