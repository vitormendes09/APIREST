import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Recado } from './entities/recado.entiti';
import { NotFoundError } from 'rxjs';

@Injectable()
export class RecadoService {
  private lastId = 1;

  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é o texto',
      de: 'Joao',
      para: 'Vitor',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundErro() {
    throw new NotFoundException('Recado não encontrado');
  }

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    const recado = this.recados.find(item => item.id === +id);

    if (recado) return recado;

    this.throwNotFoundErro();
  }

  create(body: any) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...body,
    };
    this.recados.push(newRecado);

    return newRecado;
  }

  update(id: string, body: any) {
    const recadoExisteIndex = this.recados.findIndex(item => item.id === +id);

    if (recadoExisteIndex <= 0) {
      this.throwNotFoundErro();
    }
    if (recadoExisteIndex >= 0) {
      const recadoExiste = this.recados[recadoExisteIndex];
      this.recados[recadoExisteIndex] = {
        ...recadoExiste,
        ...body,
      };
    }

    return this.recados[recadoExisteIndex];
  }

  remove(id: string) {
    const recadoExiste = this.recados.findIndex(item => item.id === +id);

    if (recadoExiste < 0) {
      this.throwNotFoundErro();
    }

    const recado = this.recados[recadoExiste];

    this.recados.splice(recadoExiste, 1);

    return recado;
  }
}
