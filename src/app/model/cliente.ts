import { Contacto } from './contacto';

export class Cliente{
    codigo:number;
    contactos:Contacto[];
    nombre:string;

    constructor(codigo?:number,nombre?:string,...contactos:Contacto[]){
        this.codigo = codigo;
        this.contactos = contactos;
        this.nombre = nombre;
    }
}