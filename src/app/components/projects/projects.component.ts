import { ProjectsService } from './../../services/projects.service';
import { Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IProjects } from '../../interfaces/iprojects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProjectsService],
})
export class ProjectsComponent {
  projects:IProjects[];
  constructor(private ProjectsService:ProjectsService){
    this.projects = this.ProjectsService.projects ;
   }

}
