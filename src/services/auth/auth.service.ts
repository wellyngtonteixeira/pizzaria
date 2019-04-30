import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import {User} from "../../models/user.model";
import {AngularFireDatabase, AngularFireObject} from "@angular/fire/database";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AuthService {

    usuario: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
        afAuth.authState.switchMap(auth => {
            if(auth){
                return this.db.object("usuarios/"+auth.uid).valueChanges()
            }else{
                return Observable.of(null)
            }
        })
            .subscribe(user=> {
                if(user){
                    this.usuario.next(user)
                    console.log("subiu="+this.usuario.getValue().roles)
                }else{
                    console.log("nulo")
                }
            })
    }


    ///// SignIn - SignOut Process /////

    login(usuario: string, senha: string): Promise<firebase.auth.UserCredential>{
        let email = usuario+"@hesed.com";
        return this.afAuth.auth.signInWithEmailAndPassword(email, senha);
    }

    signOut() {
        this.afAuth.auth.signOut().then(suc=> {
            this.usuario = new BehaviorSubject(null)
        })
    }

}