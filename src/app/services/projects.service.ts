import { Injectable } from '@angular/core';
import { IProjects } from '../interfaces/iprojects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects:IProjects[] ;

  constructor() {
    this.projects = [
      {
        "id":1,
        "title":"Portfolio",
        "image":"../images/projects-images/portofolio.jpg",
        "demo":"https://ayman-sedkey-portfolio.netlify.app/home",
        "code":"https://github.com/Aaymansedkey10/my-portfolio.git",
        "details":"Angular"
      },
      {
        "id":2,
        "title":"Weahter App",
        "image":"../images/projects-images/weatherApp.jpg",
        "demo":"https://template-weather-app.netlify.app/",
        "code":"https://github.com/Aaymansedkey10/Weather-App.git",
        "details":"Angular"
      },
      {
        "id":3,
        "title":"E-commerce",
        "image":"../images/projects-images/E-commerce.jpg",
        "demo":"https://aaymansedkey10.github.io/e-commerce/",
        "code":"https://github.com/Aaymansedkey10/e-commerce",
        "details":"HTML , CSS , Bootstrap , js , API"
      },
      {
        "id":4,
        "title":"Calculator",
        "image":"../images/projects-images/calculator.jpg",
        "demo":"https://aaymansedkey10.github.io/calculator-template/",
        "code":"https://github.com/Aaymansedkey10/calculator-template.git",
        "details":"HTML , CSS , Bootstrap , js"
      },{
        "id":5,
        "title":"To do List",
        "image":"../images/projects-images/todolist.jpg",
        "demo":"https://aaymansedkey10.github.io/to_do_list/",
        "code":"https://github.com/Aaymansedkey10/to_do_list.git",
        "details":"HTML , CSS , Bootstrap , js"
      },
      {
        "id":6,
        "title":"ministry of communication",
        "image":"../images/projects-images/ministry-of-communication.jpg",
        "demo":"https://aaymansedkey10.github.io/the_ministry_of_communications/",
        "code":"https://github.com/Aaymansedkey10/the_ministry_of_communications",
        "details":"HTML , CSS , Bootstrap , Swiper js"
        
      },
      {
        "id":7,
        "title":"shapely",
        "image":"../images/projects-images/Shapely.jpg",
        "demo":"https://aaymansedkey10.github.io/Shapely-project/",
        "code":"https://github.com/Aaymansedkey10/Shapely-project",
        "details":"HTML , CSS , Bootstrap"
      },
      {
        "id":8,
        "title":"bootstrap",
        "image":"../images/projects-images/Bootstrap.jpg",
        "demo":"https://aaymansedkey10.github.io/Bootstrap-project/",
        "code":"https://github.com/Aaymansedkey10/Bootstrap-project",
        "details":"HTML , CSS , Bootstrap"
      },
      {
        "id":9,
        "title":"Gricklo",
        "image":"../images/projects-images/Gricklo.jpg",
        "demo":"https://aaymansedkey10.github.io/Gricklo/",
        "code":"https://github.com/Aaymansedkey10/Gricklo",
        "details":"HTML , CSS" 
      }
    ]
   }
}
