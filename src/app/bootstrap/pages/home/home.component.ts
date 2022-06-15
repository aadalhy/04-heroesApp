import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      age: 20
    },
    {
      id: 2,
      name: 'Pedro',
      lastName: 'Gonzalez',
      age: 40
    },
    {
      id: 3,
      name: 'Miguel',
      lastName: 'Lopez',
      age: 25
    },
    {
      id: 4,
      name: 'Ana',
      lastName: 'Vazquez',
      age: 15
    }
  ];

  data2: any[] = [
    {
      id: 1,
      name: 'Luis',
      lastName: 'Perez',
      age: 60
    },
    {
      id: 2,
      name: 'Carmen',
      lastName: 'Gonzalez',
      age: 65
    },
    {
      id: 3,
      name: 'antonio',
      lastName: 'Lopez',
      age: 70
    },
    {
      id: 4,
      name: 'Miriam',
      lastName: 'Vazquez',
      age: 75
    },
    {
      id: 5,
      name: 'Angel',
      lastName: 'Vazquez',
      age: 80
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
