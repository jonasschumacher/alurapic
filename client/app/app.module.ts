import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importou o módulo que já possui um provider configurado
import { HttpModule } from '@angular/http';
// importou a extensão map!
import 'rxjs/add/operator/map';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes da aplicação
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BotaoModule } from './botao/botao.module';

@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule
    ],
    declarations: [
        AppComponent,
        CadastroComponent,
        ListagemComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}