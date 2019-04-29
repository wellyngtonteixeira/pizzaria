import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import {User} from "../../models/user.model";
import {AngularFireDatabase, AngularFireObject} from "@angular/fire/database";

@Injectable()
export class AuthService {

    user: firebase.User
    usuario: User

    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
        afAuth.authState.subscribe(user => {
            this.user = user;
            if(user){
                this.db.object<User>("usuarios/"+user.uid).valueChanges().subscribe(
                    sub=> this.usuario = sub
                )
            }
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