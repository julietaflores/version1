import { Component, OnInit, ViewChild } from '@angular/core';
import {UsuariosService} from '../servicio/usuarios.service';
import { Routes, RouterModule, Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  login=null;
  log={
    usuario: null,
    password: null,
  }


  usuarios=null;
  usuario={
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null
  }

  constructor(
    private usu: UsuariosService,
    private router: Router,    
    ) { }
  ngOnInit() {

  
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
         alert(datos['mensaje']);
          //this.obtenerlista();
         // console.log("ola");
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


  validar() {
    this.usu.validar(this.log).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
         alert(datos['mensaje']);
         this.router.navigate(['/cliente']);
        }else{
          if(datos['resultado'] == 'ERROR') {
            alert(datos['mensaje']);           
           }
        }
      }
      
    );
  }

}
