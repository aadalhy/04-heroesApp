import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // Estilo
  @Input() color: 'light'| 'dark' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' = 'light';
  @Input() hover = false;
  @Input() border = false;
  @Input() striped = false;

  // Datos
  @Input() dataTable:any[] = [];

  // variables
  headers?: any[];
  
  constructor() { }

  ngOnInit(): void {
    this.headers = Object.keys(this.dataTable[0]);
    console.log(this.headers);
  }

}
