import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date | any;
  progress=false;

  constructor(public dialogRef:MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.progress= true;
    this.user.birthDate = this.birthDate.getTime()
    console.log('User', this.user);
    this.firestore.collection('users').add(this.user.toJSON()).then((result: any)=>{
      this.progress = false;
      console.log('Adding User finished', result);
      this.dialogRef.close();
    });
  }
}
