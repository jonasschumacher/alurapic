import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{
    transform(fotos: FotoComponent[], digitado: string) {
        digitado = digitado.toLocaleLowerCase();

        return fotos.filter(foto => foto.titulo.toLocaleLowerCase().includes(digitado));
    }
}