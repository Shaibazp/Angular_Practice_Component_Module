import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent 
{

    public P:number = 10000;
    public R:number = 10.25;
    public N:number = 1;
    public EMI:number = 0;
     
    public RateChange(e:any) 
    {
        this.R = e.target.value;
    }
    public YearChange(e:any) 
    {
        this.N =  e.target.value;
    }
    public AmountChange(e:any) 
    {
        this.P  = e.target.value;
    }

    public CalculateClick()
    {
      var N = this.N * 12;
      var R = this.R / 12 / 100;
       this.EMI = this.P * R * Math.pow(1 + R, N)/Math.pow(1 + R, N) - 1; 
    }
}
