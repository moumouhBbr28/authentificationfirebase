import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { user } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {} as user;

  constructor(public authfm: AngularFireAuth, public navCtrl: NavController, public navparams: NavParams) {}

  async login() {
    try {
      if (!this.user || !this.user.email || !this.user.password) {
        console.error("Email or password is not provided.");
        return;
      }

      const result = await this.authfm.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      
      if (result) {
        console.log('Connexion réussie !!');
        console.log(result);
        alert('bienvenue !!');
        // Rediriger vers la page suivante
      }
    } catch (e) {
      console.error(e);
    }
  }
}
