import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { FemtaPopoverComponent } from 'src/app/components/femta-popover/femta-popover.component';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-reestrenyiment',
  templateUrl: './reestrenyiment.page.html',
  styleUrls: ['./reestrenyiment.page.scss'],
})
export class ReestrenyimentPage implements OnInit {

  ultimCopVentre : OptionItem [] = [

    {id: 1, text: 'Avui', checked: false},
    {id: 2, text: 'Ahir', checked: false},
    {id: 3, text: 'Fa 2 dies', checked: false},
    {id: 4, text: 'Fa 3 dies', checked: false},
    {id: 5, text: 'Fa 4 dies', checked: false},
    {id: 6, text: 'Fa més de 5 dies', checked: false}
  ]

  ultimaFemtaEscalaBristol : number;

  constructor() { }

  ngOnInit() {
  }

}
