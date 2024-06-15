import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobiles-details',
  templateUrl: './mobiles-details.component.html',
  styleUrls: ['./mobiles-details.component.css']
})
export class MobilesDetailsComponent implements OnInit
{

  public ThenBlock:TemplateRef<any>|null = null;
  @ViewChild('view1', {static:true}) public view1:TemplateRef<any>|null = null;
  @ViewChild('view2', {static:true}) public view2:TemplateRef<any>|null = null;
  @ViewChild('view3', {static:true}) public view3:TemplateRef<any>|null = null;
  @ViewChild('view4', {static:true}) public view4:TemplateRef<any>|null = null;
  
  ngOnInit(): void 
  {
      this.ThenBlock = this.view1;  
  }

  public viewChnaged(viewName:string):void
  {
      switch(viewName)
      {
        case "view1" : this.ThenBlock = this.view1;break;
        case "view2" : this.ThenBlock = this.view2;break;
        case "view3" : this.ThenBlock = this.view3;break;
        case "view4" : this.ThenBlock = this.view4;break;
      }
  }
}
