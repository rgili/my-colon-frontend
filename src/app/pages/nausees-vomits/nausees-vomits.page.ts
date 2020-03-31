import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nausees-vomits',
  templateUrl: './nausees-vomits.page.html',
  styleUrls: ['./nausees-vomits.page.scss'],
})
export class NauseesVomitsPage implements OnInit {

  nausees : string [] = ['Un cop o dos al dia', 'Més de dos cops al dia'];
  descripcioVomit : String [] = [
    'Contingut alimentici',
    'Mucós',
    'Biliós (tonalitat verda)',
    'Hemàtic (presència de sang)'
  ]

  constructor() { }

  ngOnInit() {
  }

}
