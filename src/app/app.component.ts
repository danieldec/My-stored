import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Daniel';
  age = 34;
  img = 'https://cdn.wallpapersafari.com/34/71/QCeSFc.jpg';
  buttonDesabled = true;
  newName: string = '';
  person = {
    name: 'Daniel',
    age: 34,
    img: 'https://cdn.wallpapersafari.com/34/71/QCeSFc.jpg',
  };
  names:string[] =["Daniel","Julian", "Edgar" ]
  toggleButton() {
    this.buttonDesabled = !this.buttonDesabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
  onscroll(event:Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event:Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index:number) {
    this.names.splice(index, 1);
  }
}
