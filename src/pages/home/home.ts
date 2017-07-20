import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalBankDetails } from '../modal-bank/modal-bank';

import {AngularFireDatabase  , FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  customers: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,
  			  public modalCtrl: ModalController,
  			  db: AngularFireDatabase) {
  		 	 this.customers = db.list('/customer');
  }

  bankModal(){
  	let modal = this.modalCtrl.create(ModalBankDetails)
    modal.present();
  }

}
