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
        id:1,
        name:'ministry of communication',
        image:'projects-image/ministry-of-communication.jpg',
        live:'https://aaymansedkey10.github.io/the_ministry_of_communications/',
        code:'https://github.com/Aaymansedkey10/the_ministry_of_communications',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      },
      {
        id:2,
        name:'E-commerce',
        image:'projects-image/E-commerce.jpg',
        live:'https://aaymansedkey10.github.io/e-commerce/',
        code:'https://github.com/Aaymansedkey10/e-commerce',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      },
      {
        id:3,
        name:'coming soon',
        image:'projects-image/comming-soon.jpg',
        live:'https://aaymansedkey10.github.io/Coming-Soon/',
        code:'https://github.com/Aaymansedkey10/Coming-Soon',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      },
      {
        id:4,
        name:'counter',
        image:'projects-image/counter.jpg',
        live:'https://aaymansedkey10.github.io/counter/',
        code:'https://github.com/Aaymansedkey10/counter',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      },
      {
        id:5,
        name:'to do list',
        image:'projects-image/to-do-list.jpg',
        live:'https://aaymansedkey10.github.io/to_do_list/',
        code:'https://github.com/Aaymansedkey10/to_do_list',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      },
      {
        id:6,
        name:'bootstrap',
        image:'projects-image/Bootstrap.jpg',
        live:'https://aaymansedkey10.github.io/Bootstrap-project/',
        code:'https://github.com/Aaymansedkey10/Bootstrap-project',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      },
      {
        id:7,
        name:'shapely',
        image:'projects-image/Shapely.jpg',
        live:'https://aaymansedkey10.github.io/Shapely-project/',
        code:'https://github.com/Aaymansedkey10/Shapely-project',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      },
      {
        id:8,
        name:'Gricklo',
        image:'projects-image/Gricklo.jpg',
        live:'https://aaymansedkey10.github.io/Gricklo/',
        code:'https://github.com/Aaymansedkey10/Gricklo',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.'
      }
    ]
   }
}
