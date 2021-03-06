import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Speciality} from '../../models/speciality';
import {ActivatedRoute, Router} from '@angular/router';

import {SpecialitiesService} from '../../services/specialities.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  public specialities: Speciality[];
  ocultarMostrarModificar: boolean = false;
  @Output() actualiza = new EventEmitter<Speciality>();

  // public owners :Owner[];
  constructor(private route: ActivatedRoute, private router: Router, private specialitiesService: SpecialitiesService) {

    specialitiesService.getSpecialities().subscribe(datos => {
      this.specialities = datos;
      console.log(this.specialities);
    });

  }

  ngOnInit() {
  }


  onSelect(s: Speciality) {
    this.router.navigate(['/specialities', s.id]);
  }

// funcion del html del ownwer para borrar Y ME DEVUELVE LA LISTA
  del(speciality: Speciality) {
    console.log(speciality);
    // alert('aqui borramos');
    const msg = '¿Estas seguro nque quieres borrar a ' + speciality.name + '?';
    if (confirm(msg)) {
      this.specialitiesService.delSpecialitiesList(speciality.id).subscribe(datos => {
        if (datos.result === 'OK') {
          this.specialities = this.specialities.filter(tipo => tipo.id !== speciality.id);
        } else {
          alert('Ha habido una error al eliminar');
        }
        console.log(this.specialities);
      });
    }
  }


  editar(s) {
    console.log('editar');
    this.ocultarMostrarModificar = true;
    console.log(s);


  }

// modificamos

  upd(specialityId) {
    console.log('Speciality id' + specialityId);
    this.specialitiesService.updSpecialities(specialityId).subscribe(datos => {
      this.specialities = datos;
      if (datos.result === 'OK') {
        this.specialities = this.specialities.filter(tipo => tipo.id !== specialityId);
      } else {
        alert('Ha habido una error al eliminar');
      }
      console.log(this.specialities);
    });
  }

  verOcultarFormulario() {
    this.ocultarMostrarModificar = !this.ocultarMostrarModificar;
  }

  actualizaEspecialidad(nuevaEspecialidad: Speciality) {
    this.specialities.push(nuevaEspecialidad);
    this.verOcultarFormulario();
  }

}
