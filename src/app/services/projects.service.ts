import { Injectable } from '@angular/core';
import { IProjects } from '../interfaces/iprojects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: IProjects[];

  constructor() {
    this.projects = [
      {
        "id": 1,
        "title": "E-commerce",
        "image": "projects-image/E-commerce.webp",
        "demo": "https://aaymansedkey10.github.io/e-commerce/",
        "code": "https://github.com/Aaymansedkey10/e-commerce",
        "details": "HTML, CSS, Bootstrap, JS, API"
      },
      {
        "id": 2,
        "title": "Calculator",
        "image": "projects-image/calculator.webp",
        "demo": "https://aaymansedkey10.github.io/calculator-template/",
        "code": "https://github.com/Aaymansedkey10/calculator-template.git",
        "details": "HTML, CSS, Bootstrap, JS"
      },
      {
        "id": 3,
        "title": "To-do List",
        "image": "projects-image/todolist.webp",
        "demo": "https://aaymansedkey10.github.io/to_do_list/",
        "code": "https://github.com/Aaymansedkey10/to_do_list.git",
        "details": "HTML, CSS, Bootstrap, JS"
      },
      {
        "id": 4,
        "title": "Ministry of Communication",
        "image": "projects-image/ministry-of-communication.webp",
        "demo": "https://aaymansedkey10.github.io/the_ministry_of_communications/",
        "code": "https://github.com/Aaymansedkey10/the_ministry_of_communications",
        "details": "HTML, CSS, Bootstrap, Swiper JS"
      },
      {
        "id": 5,
        "title": "Shapely",
        "image": "projects-image/Shapely.webp",
        "demo": "https://aaymansedkey10.github.io/Shapely-project/",
        "code": "https://github.com/Aaymansedkey10/Shapely-project",
        "details": "HTML, CSS, Bootstrap"
      },
      {
        "id": 6,
        "title": "Bootstrap Project",
        "image": "projects-image/Bootstrap.webp",
        "demo": "https://aaymansedkey10.github.io/Bootstrap-project/",
        "code": "https://github.com/Aaymansedkey10/Bootstrap-project",
        "details": "HTML, CSS, Bootstrap"
      },
      {
        "id": 7,
        "title": "Gricklo",
        "image": "projects-image/Gricklo_1.webp",
        "demo": "https://aaymansedkey10.github.io/Gricklo/",
        "code": "https://github.com/Aaymansedkey10/Gricklo",
        "details": "HTML, CSS"
      }
    ];
  }
}
