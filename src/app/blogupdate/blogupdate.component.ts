import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServices } from '../blog.servies';
import { CategoryServices } from '../categoies.services';
import { Blog } from '../model/blog';
import { Category } from '../model/category';

@Component({
  selector: 'app-blogupdate',
  templateUrl: './blogupdate.component.html',
  styleUrls: ['./blogupdate.component.css'],
  providers:[CategoryServices,BlogServices]
})
export class BlogupdateComponent implements OnInit {

  categories:Category[]=[];
  blog:any;
  model:any;
  id:number=0;
  title:string="";
  description:string="";
  imgUrl:string="";
  categoryId:number=0;
  writingDate:any;
  readcount:number=0;
  
  
  

  constructor(private categoryservices:CategoryServices,
             private blogservices:BlogServices,
             private activatesRouter:ActivatedRoute,
             private router:Router) {}

  ngOnInit(): void {
    this.categoryservices.getCategory().subscribe(data=>{
      this.categories=data
    });

    this.activatesRouter.params.subscribe(param=>{
      this.blogservices.getBlogsId(param["blogId"]).subscribe(data=>{
        this.blog=data;
        this.id=this.blog.id;
        this.title=this.blog.title;
        this.description=this.blog.description;
        this.imgUrl=this.blog.imgUrl;
        this.categoryId=this.blog.categoryId;
        this.writingDate=this.blog.writingDate;
        this.readcount=this.blog.readcount;

      })

      });    

      
  }

  updateBlog()
  {
    const blog={
      id:this.id,
      title:this.title,
      description:this.description,
      imgUrl:this.imgUrl,
      categoryId:this.categoryId,
      writingDate:this.writingDate,
      readcount:this.readcount
    }

    this.blogservices.updateBlog(blog).subscribe(data=>{
      this.router.navigate(['/blogs',data.id])
    });
  }

}
