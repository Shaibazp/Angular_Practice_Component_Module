import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent 
{
    public MsgfromChild:string = '';
    public msg:string = '';
    public sendClick()
    {
        this.msg = "Hello! From PArent";
    }

    public getMsgFromChild(e:string)
    {
       this.MsgfromChild = e; 
    }
}
