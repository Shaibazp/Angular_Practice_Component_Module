import { Component, OnInit} from '@angular/core';
import { CaptchServiceService } from '../../service/captch-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

    public code:string = '';
    constructor(private captch:CaptchServiceService)
    {  
    }

    ngOnInit(): void 
    {
        this.code = this.captch.GenerateCode();
    }

    public generateNewCode() 
    {
        this.code = this.captch.GenerateCode();    
    }
}