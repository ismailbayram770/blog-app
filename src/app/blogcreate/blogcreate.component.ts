import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServices } from '../blog.servies';
import { CategoryServices } from '../categoies.services';
import { Category } from '../model/category';

@Component({
  selector: 'app-blogcreate',
  templateUrl: './blogcreate.component.html',
  styleUrls: ['./blogcreate.component.css'],
  providers:[CategoryServices,DatePipe]
})
export class BlogcreateComponent implements OnInit {

  categories:any;
  model:any={};
  t=new Date();
  t_lates:any;

  constructor(private categoryservices:CategoryServices,
             private blogservices:BlogServices,
             private router:Router,
              private activatedRoute:ActivatedRoute,
              public datepipe:DatePipe ) {}

  ngOnInit(): void {
    this.categoryservices.getCategory().subscribe(data=>{
      this.categories=data
    });
  }

  createblog()
  {
    
    const blog={
      id:0,
      title:this.model.title,
      description:this.model.description,
      imgUrl:this.model.imgUrl,
      categoryId:this.model.categoryId,
      writingDate:this.datepipe.transform(new Date(),'dd/MM/yyyy'),
      readcount:0
    }

    this.blogservices.createBlog(blog).subscribe(data=>{
      this.router.navigate(['/blogs',data.id])
    });    
  }
}
