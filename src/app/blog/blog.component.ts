import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { BlogServices } from '../blog.servies';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[BlogServices]
})
export class BlogComponent implements OnInit {

  blog:Blog[]=[];
  blogdate:Blog[]=[];
  error:any;  
  count:number=0;

  blogs:any;
  id:number=0;
  title:string="";
  description:string="";
  imgUrl:string="";
  categoryId:number=0;
  writingDate:any;
  readcount:number=0;

  constructor(private blogservies:BlogServices,
             private activatedRoute:ActivatedRoute,
             private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.blogservies.getBlogs(params["categoryId"]).subscribe(data=>{this.blog=data},error=>this.error=error)
    });  
  }

  


}
