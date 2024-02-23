import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloV2(language: 'en' | 'es'): string {
    // if language is not provided, default to english (using a case)
    switch (language) {
      case 'es':
        return '¡Hola Mundo!';
      default:
        return 'Hello World!';
    }
  }
}
