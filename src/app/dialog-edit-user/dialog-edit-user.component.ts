import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User = new User();
  progress= false;
  birthDate: Date | any;
  userId:string | any;

  constructor(public dialogRef:MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.progress = true;
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(()=>{
      this.progress = false;
      this.dialogRef.close();
    });
  }

}
