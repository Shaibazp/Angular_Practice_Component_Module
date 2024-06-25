import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit
{

  public InserClick(e:any, msg:any):void
  {
      document.write(`
        Button ID : ${e.target.id} <br />
        Button Name : ${e.target.name} <br />
        Button className : ${e.target.className} <br />
        Button ID : ${e.ctrlKey} <br />
        <h2>${msg}</h2> `);
  }

  public img_src:string = "assets/shoes.jpg";
  public styleObject:{position:string, left:string, top:string} = {
    position: '',
    left: '',
    top: ''
  };
  public setColor(clrName:any)
  {
      switch(clrName)
      {
          case 'black' : this.img_src = "assets/black-shoes.jpg";break;
          case 'green' : this.img_src = "assets/green-shoes.jpg";break;
      }
  }

  public mouseOverChange(e:any)
  {
      this.styleObject = {
        position: 'absolute',
        left: e.clientX+'px',
        top: e.clientY+'px'};

  }
  ngOnInit(): void 
  {
  }

  public users:any[] = [
    {UserName : 'XYZ'},
    {UserName : 'qwe'},
    {UserName : 'rty'},
    {UserName : 'asd'},
    {UserName : 'ghj'}
  ];
  public StyleObject:{color:string} = {
    color: ''
  };
  public pwdError:string = '';
  public errorHandling:boolean = false;
  public isPwdErrorVisible:boolean = false;
  public userError:string = "";
  public verifyUser(e:any)
  {
    for(var usr of this.users)
      {
        console.log(e.target.value);
          if(usr.UserName == e.target.value)
          {
              this.userError = "User Name Taken - Try Another";
              this.StyleObject = {color: 'red' };
              this.errorHandling = false;
              break;
          }
          else
          {
            this.userError = "User Name Available";
            this.StyleObject = {color: 'green' };
            this.errorHandling = true;
          }
      }   
  }

  public verifyPassword(e:any):void
  {
    if(e.keyCode>=65 && e.keyCode<=90)
      {
          this.isPwdErrorVisible = true;
      }
      else
      {
        this.isPwdErrorVisible = false;
      }
  }

  verifyRequired(e:any) 
  {
      if(e.target.value == "")
        {
              this.userError = "User Name Required";
        }
        else
        {
          this.userError = "";
        }
  }

  public passwordFocus()
  {
      this.pwdError = 'Caps Not Allowed';
  }

  public paswordBlue():void 
  {
    this.pwdError = '';
  }
}
