import { SkillsComponent } from './components/skills/skills.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path:'aboutme' , component:AboutComponent},
    {path:'skills' , component:SkillsComponent},
    {path:'services' , component:ServicesComponent},
    {path:'projects' , component:ProjectsComponent},
    {path:'contact' , component:ContactComponent},
    { path: '**', redirectTo: 'home' }
];
