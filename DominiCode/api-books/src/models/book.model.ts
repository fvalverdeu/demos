import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Book extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
    default: 'Ingles',
  })
  idioma: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  portada: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;

  @property({
    type: 'string',
    required: true,
  })
  link_amazon: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  oferta: number;


  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
