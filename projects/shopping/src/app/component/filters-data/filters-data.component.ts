import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters-data',
  templateUrl: './filters-data.component.html',
  styleUrls: ['./filters-data.component.css']
})
export class FiltersDataComponent 
{

    @Input() public AllCount:any = 0;
    @Input() public ElectronicsCount:any = 0;
    @Input() public JewelarysCount:any = 0;
    @Input() public MenClothsCount:any = 0;
    @Input() public WomenClothsCount:any = 0;
    public categoryName:string = 'all';
    @Output() public CategoryChanged:EventEmitter<any> = new EventEmitter<any>();
    @Output() public SendClick:EventEmitter<any> = new EventEmitter<any>();

    SendCategoryName(e:any)
    {
        this.CategoryChanged.emit(e.target.value);
    }

    SendCategorybutton()
    {
        this.SendClick.emit({
          'Name':'TV','Price':25000
        });
    }
    
}
