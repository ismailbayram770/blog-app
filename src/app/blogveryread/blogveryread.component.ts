import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServices } from '../blog.servies';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blogveryread',
  templateUrl: './blogveryread.component.html',
  styleUrls: ['./blogveryread.component.css'],
  providers:[BlogServices]
})
export class BlogveryreadComponent implements OnInit {

  blog:Blog[]=[];
  blogdate:Blog[]=[];
  error:any;  
  readcount:number=0;
  readcount2:any;

  constructor(private blogservies:BlogServices,
             private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.blogservies.getBlogs(params["categoryId"]).subscribe(data=>{
        this.blog=data
      })
    });
  }

}
