import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FakestoreProductContract } from "../contracts/FakestoreProductContract";
import { FakestoreComponent } from "../component/fakestore/fakestore.component";
@Injectable({
    providedIn: 'root'
})
export class fakestore
{
    constructor(private http:HttpClient){}

    public GetProduct(id:number):Observable<FakestoreProductContract>
    {
        return this.http.get<FakestoreProductContract>(`http://fakestoreapi.com/products/${id}`); 
    }
    public getProducts():Observable<FakestoreProductContract[]>
    {
        return this.http.get<FakestoreProductContract[]>(`http://fakestoreapi.com/products`);  
    }

    public getCategories():Observable<string[]>
    {
        return this.http.get<string[]>(`http://fakestoreapi.com/products/categories`);  
    }

    public GetSpecificCategory(category:string):Observable<FakestoreProductContract[]>
    {
        return this.http.get<FakestoreProductContract[]>(`http://fakestoreapi.com/products/category/${category}`);
    }

    MenuList:any[] = [
        {
            menu_name : 'Home',
            url : 'home'
        },
        {
            menu_name : `Men's Fashion`,
            url : 'mens'
        },
        {
            menu_name : `Women's Fashion`,
            url : 'womens'
        },
        {
            menu_name : 'Electronics',
            url : 'electronics'
        },
        {
            menu_name : 'Jewelery',
            url : 'jewelery'
        },
        {
            menu_name : 'Admin Portal',
            url : 'admin'
        }
    ];

}