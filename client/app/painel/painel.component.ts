import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    @Input() titulo: string;
    private _elemento: ElementRef;

    constructor(elemento: ElementRef) {
        this._elemento = elemento;
    }

    ngOnInit(): void {
        this.titulo = this.titulo.length > 7 ? `${this.titulo.substr(0, 7)}...` : this.titulo;
    }

    fadeOut(cb) {
        // erro de compilação! Não entra o $!
         $(this._elemento.nativeElement).fadeOut(cb);
     }
}