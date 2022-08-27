import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { ActivatedRoute } from '@angular/router';
import { BlogServices } from '../blog.servies';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-bloglastpost',
  templateUrl: './bloglastpost.component.html',
  styleUrls: ['./bloglastpost.component.css'],
  providers:[BlogServices,DatePipe]
})
export class BloglastpostComponent implements OnInit {

  blog:Blog[]=[];
  blogs:any;
  error:any;
  
  constructor(private blogservies:BlogServices,private activatedRoute:ActivatedRoute,private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.blogservies.getBlogs(params["categoryId"]).subscribe(data=>{
        // this.blogs=data.find(i=>i.writingDate==this.datepipe.transform(new Date(),'dd/MM/yyyy'))
        this.blogs=data.filter(i=> i.writingDate==this.datepipe.transform(new Date(),'dd/MM/yyyy'))
        console.log(this.blogs)
        
      })
    });

  }

}
