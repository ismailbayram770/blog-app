import { Component, OnInit } from '@angular/core';
import { CategoryServices } from '../categoies.services';
import { Category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryServices]
})
export class CategoryComponent implements OnInit {

  categoies:Category[]=[];

  constructor(private categoryServices:CategoryServices) { }

  ngOnInit(): void {
    this.categoryServices.getCategory().subscribe(data=>{this.categoies=data},error=>console.log(error))
  }

}
