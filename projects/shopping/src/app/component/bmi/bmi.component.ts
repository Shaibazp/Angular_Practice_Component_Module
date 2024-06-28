import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent 
{
    public BMIStatus:{'margin-left':string} = {
      'margin-left': '1150px'
    };

    public ChangeStatus(e:any)
    {
      alert(e.clientX);
        this.BMIStatus = {'margin-left': e.clientX+'px'};
    }
}
