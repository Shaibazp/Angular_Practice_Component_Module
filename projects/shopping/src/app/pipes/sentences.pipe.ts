import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sentence'
})
export class sentences implements PipeTransform
{
    transform(str:string) 
    {
       var firstChar = str.charAt(0);
       var restChar = str.substring(1);
       var sentence = firstChar.toUpperCase() + restChar.toLowerCase();
        return sentence;
    }
}