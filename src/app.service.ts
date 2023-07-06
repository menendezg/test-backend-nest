import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola';
  }
  getResultFromPost(): any{
    return {
      'key': "saracatunga",
      "testing": "yeaa"
    };
  }
}
