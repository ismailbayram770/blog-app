import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogcreateComponent } from "./blogcreate/blogcreate.component";
import { BloglastpostComponent } from "./bloglastpost/bloglastpost.component";
import { BlogupdateComponent } from "./blogupdate/blogupdate.component";
import { BlogveryreadComponent } from "./blogveryread/blogveryread.component";

import { CategoryComponent } from "./category/category.component";

const routes:Routes=[
    
    {path:"blogs",component:BlogComponent},
    {path:'', redirectTo:'blogs', pathMatch:'full'},
    {path:'blogs/category/:categoryId', component: BlogComponent},
    {path:'blogs/writingDate', component: BloglastpostComponent},
    {path:'blogs/veryread', component:BlogveryreadComponent},
    {path:'blogs/create',component:BlogcreateComponent},
    {path:'update/:blogId',component:BlogupdateComponent},

    {path:'blogs/:blogsId', component: BlogDetailComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}