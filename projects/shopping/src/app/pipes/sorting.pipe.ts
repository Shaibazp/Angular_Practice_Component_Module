import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sorting'
})
export class sorting implements PipeTransform
{
    transform(str:string[], reverse:boolean) 
    {
        if(reverse==true)
        {
            str.sort();
            str.reverse();
            return str;
        }
        else
        {
            str.sort();
            return str;
         }
    }
}