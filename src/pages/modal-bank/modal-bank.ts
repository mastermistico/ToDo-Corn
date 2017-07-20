import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,AlertController } from 'ionic-angular';

import {AngularFireDatabase  , FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'page-modal-bank',
  templateUrl: 'modal-bank.html',
})
export class ModalBankDetails{
  name: string;
  address: string;
  dob: string;
  customers: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public viewCtrl: ViewController,
  			  public alertCtrl: AlertController,
  			  public db: AngularFireDatabase) {
  				this.customers = db.list('/customer')
  }


  dismissModal() {
  	this.viewCtrl.dismiss()
  }

  saveClick() {
  	
  	let prompt = this.alertCtrl.create({
    message: "Enter customer",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.customers.push({
            name: this.name,
            address: this.address,
            don: this.dob
          });
        }
      }
    ]
  });
  prompt.present();
  	this.dismissModal()
  }

}
