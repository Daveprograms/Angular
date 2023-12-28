import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // creating an array of object

  salesPersonList: SalesPerson[]= [
    new SalesPerson("David", "Fashola", "Davfash1@gmail.com",5000 ),
    new SalesPerson("Emmanuel", "Fash", "Emmanuel1@gmail.com", 10000),
    new SalesPerson("Rachel", "Obu", "Rachel1@gmail.com",9000 ),
    new SalesPerson("Temi", "Uby", "Temi1@gmail.com", 3000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
