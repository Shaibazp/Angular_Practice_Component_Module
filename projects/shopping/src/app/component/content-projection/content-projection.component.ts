import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit
{
  public TemplateNames:string = 'Choose Template';
  public ThenBlock:TemplateRef<any>|null = null;
  @ViewChild('Temp1', {static:true}) public Temp1:TemplateRef<any>|null = null;
  @ViewChild('Temp2', {static:true}) public Temp2:TemplateRef<any>|null = null;
  @ViewChild('Temp3', {static:true}) public Temp3:TemplateRef<any>|null = null;

  constructor(){}
  ngOnInit(): void 
  { 
      this.ThenBlock = this.Temp1;
  }

  public TemplateChange():void
  {
    switch(this.TemplateNames)
    {
      case "Temp1" : this.ThenBlock = this.Temp1;break;
      case "Temp2" : this.ThenBlock = this.Temp2;break;
      case "Temp3" : this.ThenBlock = this.Temp3;break;
    }
  }
}
