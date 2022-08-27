import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Blog } from "./model/blog";

@Injectable(
    {providedIn: 'root'}
)
export class BlogServices{

    url="http://localhost:3000/blogs";
   
    constructor(private http:HttpClient){}

    getBlogs(categoryId:number):Observable<Blog[]>
    {
        let newUrl=this.url;

        if(categoryId)
        {
            newUrl +='?categoryId='+categoryId;
        }

        return this.http.get<Blog[]>(newUrl).pipe(tap(data=>console.log(data)));
    }

    getBlogsDate():Observable<Blog>
    {
        let newUrl=this.url;
        newUrl +='/writingDate';
        return this.http.get<Blog>(newUrl).pipe(tap(data=>console.log(data)))
    }

    getBlogsId(blogId:number):Observable<Blog>
    {
        return this.http.get<Blog>(this.url +'/'+blogId).pipe(tap(data=>console.log(data)));
    }

    createBlog(blog:Blog):Observable<Blog>
    {
        return this.http.post<Blog>(this.url,blog).pipe(tap(data=>console.log(data)));
    }
    deleteBlog(blog:Blog):Observable<Blog>
    {
        return this.http.delete<Blog>(this.url+'/'+blog.id).pipe(tap(data=>console.log(data)));
    }
    updateBlog(blog:Blog):Observable<Blog>
    {
        
        return this.http.put<Blog>(this.url+'/'+blog.id,blog).pipe(tap(data=>console.log(data)))
    }
}