import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  solucionarProblema(): string {  
    return 'Problema Solucionado!';
  }
}
