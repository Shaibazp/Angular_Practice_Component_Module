import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit
{
    
  public category:string[] = ['elec','fashion', 'footwear'];
    public Prod:
    {Name:string, Price:number, Mfd:Date, Rate:number}={
      Name: 'TV',
      Price: 25000.40,
      Mfd: new Date('12/12/2024'),
      Rate: 0.025
    };

    ngOnInit(): void {
      console.log(JSON.stringify(this.Prod));
      this.cnt = this.MSG.length;
  } 

  public PRODucts:{Name:string, ShippedTo:string}[]=
  [{Name: 'Mobile', ShippedTo: 'Delhi'},
    {Name: 'Mobile', ShippedTo: 'Mumbai'},
    {Name: 'Mobile', ShippedTo: 'Pune'}
  ];

  public status:any = {'Delhi':'Delivery in 2 Days',
          'Mumbai':'Same Day Delivery',
          'Pune': 'One Day Delivery',
          'other': 'Usually dispatched in 3-4 days'
  };

  public city:string[] = ['HYD', 'Mumbai', 'Pune'];
  public title:string = "wElCome tO anGUlAr";
  public MSG:string[] = [];
  public cnt:number = 1;
  public Message:string = '';
  public showMsg:boolean = false;
  public NotificationsMap = {
    '=0': 'No New Msg',
    '=1': 'One new Msg',
    'other': '# MSG'
  };

  public addMsg():void
  {
    
      this.MSG.push(this.Message + new Date().toLocaleTimeString());
      this.Message = '';
      this.cnt = this.MSG.length;
  }

  public showMSGS()
  {
      this.showMsg = (this.showMsg == true)?false:true;
  }
}
