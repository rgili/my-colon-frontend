import { Component, OnInit } from '@angular/core';
import { OptionItem, PopoverItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { ThrowStmt } from '@angular/compiler';
import { PopoverController } from '@ionic/angular';
import { PopoverItemComponent } from 'src/app/components/popover-item/popover-item.component';

@Component({
  selector: 'app-diarrees',
  templateUrl: './diarrees.page.html',
  styleUrls: ['./diarrees.page.scss'],
})
export class DiarreesPage implements OnInit {

  endpoint: string = '/api/v1/diarrees'
  afirmatiu: boolean;
  escalaBristol: number; // Fer un modal per seleccionar l'escala de bristol
  color: number = 1;

  popoverItems: PopoverItem [] = [
    {id: 1, text: 'Marró'},
    {id: 2, text: 'Groc'},
    {id: 3, text: 'Verd'},
    {id: 4, text: 'Gris'},
    {id: 5, text: 'Vermell'},
    {id: 6, text: 'Negre'}
  ];

  vegades : OptionItem [] = [
    {id: 0, text: '1', checked: false},
    {id: 1, text: '2', checked: false},
    {id: 2, text: '3', checked: false},
    {id: 3, text: '4', checked: false},
    {id: 4, text:'Més de 5', checked: false}
  ];

  constructor(private dataService : DataService, private popoverController : PopoverController) { }

  ngOnInit() {
  }

  resposta(event){
    this.afirmatiu = event;
  }

  colorSeleccionat(event){
    this.color = event;
  }

  async seleccionarColorFemta(event){
    const popover = await this.popoverController.create({
      component: PopoverItemComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false,
      componentProps: {items: this.popoverItems}
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();

    console.log("Popover data", data);
  }


  async guardar(){
    let auxiliarVegades = 0;
    this.vegades.forEach(vegada => {
      if(vegada.checked){
        auxiliarVegades = vegada.id + 1;
      }
    });

    let diarreesForm = {
      usuari: this.dataService.getUsuariId(),
      afirmatiu: this.afirmatiu,
      vegades: auxiliarVegades,
      escalaBristol: this.escalaBristol,
      data: this.dataService.getCurrentDate(),
      color: this.color
    };

    (await this.dataService.submit(this.endpoint, diarreesForm)).subscribe(
      data => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Guardat amb èxit...");
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error guardant...");
      }
    )
  }

}
