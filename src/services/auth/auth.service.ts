import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

    user: firebase.User

    constructor(public afAuth: AngularFireAuth) {
        afAuth.authState.subscribe(user => {
            this.user = user;
        });
    }


    ///// SignIn - SignOut Process /////

    login(usuario: string, senha: string): Promise<firebase.auth.UserCredential>{
        let email = usuario+"@hesed.com";
        return this.afAuth.auth.signInWithEmailAndPassword(email, senha);
    }

    signOut() {
        this.afAuth.auth.signOut()
    }

}