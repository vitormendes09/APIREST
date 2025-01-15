import { Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entiti';

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

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    return this.recados.find(item => item.id === +id);
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
    if (recadoExisteIndex >= 0) {
      const recadoExiste = this.recados[recadoExisteIndex];
      this.recados[recadoExisteIndex] = {
        ...recadoExiste,
        ...body,
      };
    }
  }

  remove(id: string) {
    const recadoExiste = this.recados.findIndex(item => item.id === +id);
    if (recadoExiste >= 0) {
      this.recados.splice(recadoExiste, 1);
    }
  }
}
