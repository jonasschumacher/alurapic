import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id = params['id'];
            console.log(id);
            if (id) {
                this.service
                    .buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro)
                    );
            }
        });

        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();

        this.service.cadastra(this.foto)
            .subscribe(res => {
                this.foto = new FotoComponent();
                this.mensagem = res.mensagem;
                console.log('Foto salva com sucesso');
                if (!res.inclusao) this.router.navigate(['']);
            }, erro => {
                console.log(erro);
            });
    }
}
