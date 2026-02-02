import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  user: any[] = ['abhishek', 'mohit', 'reena'];

  constructor() {
    this.user.forEach((u: any) => console.log(u));
  }

}