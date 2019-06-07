import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleController } from './sample/sample.controller';
import { SampleService } from './sample/sample.service';

@Module({
  imports: [],
  controllers: [AppController, SampleController],
  providers: [AppService, SampleService],
})
export class AppModule {}
