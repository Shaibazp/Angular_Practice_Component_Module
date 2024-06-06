import { Component } from "@angular/core";

@Component({
    selector: "app-register",
    template: `
        <div class="register-container bg-dark text-white">
            <div class="">
                <p>Ready to watch? Enter email to create or restart</p><br />
                <div class="input-group input-group-lg">
                    <input type="email" class="form-control" placeholder="Email Address">
                    <button class="btn btn-danger">
                        Get Started <span class="bi bi-chevron-right"></span>
                    </button>
                </div>
            </div>
        </div>`,
        styles: [".register-container{display:flex; justify-content:center; align-items:center; height:400px;}"]
})
export class NetflixRegister
{

}