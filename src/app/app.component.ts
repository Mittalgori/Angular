import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { StyleDivComponent } from './style-div/style-div.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ButtonComponent,StyleDivComponent, EventBindingComponent,TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-demo';
  name = "Mittal Dama";
  age = 30;
  email = "mitu796@gmail.com";
  phone_number = "+91-9769774018";
  course = "angular";
  company = "It Vedant Education Private Limited"
  city = "mumbai"
  pincode = "400705";

  
}
