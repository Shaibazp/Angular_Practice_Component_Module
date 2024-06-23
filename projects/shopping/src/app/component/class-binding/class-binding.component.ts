import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit
{
  public bgStyle:string = 'red';
  public textStyle:string = 'white';
  public paddings:string = '0px';
  public FontSize:string = '10px';
  public styleObject:{'background-color':string, 'color':string,'padding':string,'font-size'?:string} = {
    'background-color': 'red',
    "color": 'white',
    "padding": "10px"
  }
  ngOnInit(): void 
  {
  }

  public ApplyClick()
  {
    this.styleObject = {
      'background-color': this.bgStyle,
      "color": this.textStyle,
      "padding": this.paddings+'px'
    };
  }

  public FontChange()
  {
    this.styleObject = {
      'background-color': this.bgStyle,
      "color": this.textStyle,
      "padding": this.paddings+'px',
      "font-size" : this.FontSize+'px'
    };
  }

}
