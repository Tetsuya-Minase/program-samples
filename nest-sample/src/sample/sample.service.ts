import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {

    public getSample(): string {
        return 'sample service!';
    }

    public getSampleById(id: string): string {
        return `id is ${id}`;
    }

    public registerSample(param: any): any {
        return {message: 'OK', result: param};
    }

    public updateSample(id: string, param: any): any {
        return {message: id, result: param};
    }

    public deleteSample(id: string): void {
        console.log(`${id} is deleted`);
    }
}
