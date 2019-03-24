import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../servicio/usuarios.service';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})

export class CliComponent implements OnInit {

  usuarios=null;
  usuario={
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null
  }

  constructor(private usu: UsuariosService){}

  ngOnInit(){
    this.obtenerlista();
  }
  
  obtenerlista(){
    this.usu.obtenerUsuarios().subscribe(
      result => this.usuarios=result
    );
  }



  altaUsuario() {
    this.usu.altaUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
         // alert(datos['mensaje']);
          this.obtenerlista();
        }
      }
    );
  }

  bajaUsuario(idUsuario) {
    this.usu.bajaUsuario(idUsuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
         // alert(datos['mensaje']);
          this.obtenerlista();
        }
      }
    );
  }

  editarUsuario() {
    this.usu.editarUsuario(this.usuario).subscribe( datos => {
        if(datos['resultado'] == 'OK') {
       //   alert(datos['mensaje']);
          this.obtenerlista();
        }
      }
    );
  }

  seleccionarUsuario(idUsuario) {
    this.usu.seleccionarUsuario(idUsuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  hayRegistros() {
    return true;
  }


}


