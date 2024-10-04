import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent 
{

public SubmitClick(ae: any) 
{
    console.log(JSON.stringify(ae));
}
    public cityError:string = '';

    public cityChanged(e:any)
    {
        if(e.target.value == -1)
        {
            this.cityError = "Pleas Select Your City";
        }
        else
        {
          this.cityError = "";
        }
    }

}
