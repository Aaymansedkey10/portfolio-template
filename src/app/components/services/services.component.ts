import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IService } from '../../interfaces/iservice';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services:IService[] ;
  

  constructor() {
    this.services = [
      {
        title: 'Website Design & Development',
        icon: 'fa fa-laptop'
      },
      {
        title: "Single Page Application (SPA) Development",
        icon: 'fa fa-code'
      }, 
      {
        title: "UI/UX Design",
        icon: 'fa fa-paint-brush'
      },
      {
        title :"Web Performance Optimization",
        icon: 'fa fa-bolt'
      },
      {
        title : "Web Accessibility",
        icon: 'fa fa-wheelchair'
      },
      {
        title:"Front-End Consulting & Code Review",
        icon: 'fa fa-code'
      },
      {
        title:"Integration with Back-End Services",
        icon: 'fa fa-code'
      },
      {
        title:"Version Control & Collaboration",
        icon: 'fa fa-code'
      },
      {
       title :" Maintenance & Support",
       icon: 'fa fa-laptop'
      }
       
    ]
   }

}
