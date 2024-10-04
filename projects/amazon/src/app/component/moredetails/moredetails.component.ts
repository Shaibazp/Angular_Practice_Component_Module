import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreProductContract } from 'projects/shopping/src/app/contracts/FakestoreProductContract';
import { fakestore } from 'projects/shopping/src/app/service/fakestore.service';

@Component({
  selector: 'app-moredetails',
  templateUrl: './moredetails.component.html',
  styleUrls: ['./moredetails.component.css']
})
export class MoredetailsComponent implements OnInit
{
  public id:any = '';
  public product:FakestoreProductContract|null = null;
  constructor(private route:ActivatedRoute,
              private service:fakestore
  ){}

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.GetProduct(this.id)
    .subscribe(resp => this.product = resp);
  }
}
