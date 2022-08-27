import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { BlogServices } from '../blog.servies';
import { BlogComponent } from '../blog/blog.component';
import { BlogupdateComponent } from '../blogupdate/blogupdate.component';
import { Blog } from '../model/blog';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  providers:[BlogServices]
})
export class BlogDetailComponent implements OnInit {

blog:Blog;
count:number;

constructor(private blogservices:BlogServices,
             private activatesRouter:ActivatedRoute,
             private router:Router,
             private dialog:Dialog) { }

  ngOnInit(): void {
    this.activatesRouter.params.subscribe(param=>{
      this.blogservices.getBlogsId(param["blogsId"]).subscribe(data=>{
        this.blog=data;
        this.count=data.readcount
       
      })
    });
  }

  deleteBlog()
  {
    this.blogservices.deleteBlog(this.blog).subscribe(data=>{
      this.router.navigate(['/blogs'])
    });
  } 

  openDialog() {
    this.dialog.open(BlogupdateComponent, {
      minWidth: '1000px',
      
      data: {
        animal:this.blog
      },
    });
  
  }




}
