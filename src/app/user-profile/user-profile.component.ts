import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  public user1 = new user(
    'Doe',
    'John',
    25,
    'Tout est bon dans le cochon',
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );
}

class user {
  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: string,
    photoURL: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photoURL = photoURL;
  }
  public name: string;
  public firstName: string;
  public age: number;
  public quote: string;
  public photoURL: string;

  hideAge() {
    document.getElementById('age')?.classList.toggle('hidden');
  }
}
