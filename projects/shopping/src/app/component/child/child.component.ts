import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
    @Input() public MSGFromParent:string = '';
    @Output() public childClick:EventEmitter<any>  = new EventEmitter<any>();

    public childBtnClick()
    {
        this.childClick.emit('Hello! from Child');
    }

}
