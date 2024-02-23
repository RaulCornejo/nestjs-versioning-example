import {Controller, Get, Query, Version, VERSION_NEUTRAL} from '@nestjs/common';
import {AppService} from './app.service';

@Controller('/api')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Version(['1', VERSION_NEUTRAL])
    @Get('/greetings')
    getHello(): string {
        return this.appService.getHello();
    }

    @Version(['2'])
    @Get('/greetings')
    getHelloV2(@Query('language') language): string {
        return this.appService.getHelloV2(language);
    }
}
