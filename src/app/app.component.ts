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
  names: string[] = ['Daniel', 'Julian', 'Edgar'];
  products = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 365,
      image: '../assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 52,
      image: '../assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 100,
      image: '../assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 900,
      image: '../assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 565,
      image: '../assets/images/glasses.jpg',
    },
  ];
  widthImg = 10;
  box = {
    width: 100,
    height: 100,
    backGround: 'red',
  };
  registro = {
    name: '',
    email: '',
    password: '',
  };
  toggleButton() {
    this.buttonDesabled = !this.buttonDesabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
  onscroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
  onRegister(){
    console.log(this.registro);
  }
}
