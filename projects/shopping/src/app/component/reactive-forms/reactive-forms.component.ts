import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit
{
  ngOnInit(): void {}

  constructor(private fb:FormBuilder){}
  // public frmRegister = new FormGroup({
  //   Name : new FormControl(''),
  //   Price	: new FormControl(0),
  //   frmVendor : new FormGroup(
  //     {
  //       VendorName: new FormControl(''),
  //       VendorRating : new FormControl(0)
  //     })
  //   });

  public frmRegister = this.fb.group({
    Name : this.fb.control(''),
    Price : this.fb.control(0),
    frmVendor : this.fb.group({
      VendorName : this.fb.control(''),
      VendorRating : this.fb.control(0)
    }),
    Photo : this.fb.array([this.fb.control('')])
  });

    get Photos():any
    {
      return this.frmRegister.get("Photo")as FormArray;
    }
    get VendorName(): any
    {
        return this.frmRegister.get("VendorName");
    }
    get VendorRating(): any
    {
        return this.frmRegister.get("VendorRating");
    }

  public SubmitClick(e:any)
  {
      alert(JSON.stringify(e));
  }

  public updateClick()
  {
      this.frmRegister.patchValue({
        Price : 25,
        frmVendor:{
          VendorRating: 4.1
        }
      });
  }

  public addMoreClick(){
      this.Photos.push(this.fb.control(''));
  }

  public RemoveClick(index:number)
  {
      this.Photos.removeAt(index);
  }
}
