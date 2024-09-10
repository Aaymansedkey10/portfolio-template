import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  jobTitle:any[] = ['F' , 'r' ,'o' , 'n' , 't']

}
