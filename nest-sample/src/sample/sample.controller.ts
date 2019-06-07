import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req} from '@nestjs/common';
import {SampleService} from './sample.service';

@Controller('sample')
export class SampleController {
    constructor(private readonly sampleService: SampleService) {}

    @Get()
    public getSample(): string {
        return this.sampleService.getSample();
    }

    /**
     * パスの値を可変にしたい場合、express同様`:変数名`でOK
     * @param params Expressのreq.paramsと同義
     */
    @Get(':id')
    public getSamplePath(@Param() params): string {
        return this.sampleService.getSampleById(params.id);
    }

    /**
     * requestの全量は`@Req()`をつけることで取得できる
     * @param req Expressのreqと同義
     */
    @Post()
    @HttpCode(201)
    public postSample(@Req() req): any {
        return this.sampleService.registerSample(req.body);
    }

    /**
     * Putサンプル
     * @param params パスから受け取る
     * @param body Expressのreq.bodyと同義。bodyだけ取得できる
     */
    @Put(':id')
    public putSample(@Param() params, @Body() body): any {
        return this.sampleService.updateSample(params.id, body);
    }

    /**
     * HttpCodeでレスポンスのステータスコードを指定できる。
     * @param id 直接取得したい場合は`@Param()`の引数に変数名を指定してあげればOK
     */
    @Delete(':id')
    @HttpCode(204)
    public deleteSample(@Param('id') id: string): void {
        this.sampleService.deleteSample(id);
    }
}
