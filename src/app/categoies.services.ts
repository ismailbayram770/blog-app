import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "./model/category";


@Injectable()
export class CategoryServices{
    url="http://localhost:3000/categories";

    constructor(private http:HttpClient){}

    getCategory():Observable<Category[]>
    {
        return this.http.get<Category[]>(this.url);
    }
}