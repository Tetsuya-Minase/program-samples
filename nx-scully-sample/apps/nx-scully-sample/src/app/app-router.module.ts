import { SecondComponent } from './components/second/second.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './components/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'second', loadChildren: () => import('./components/second/second.module').then(m => m.SecondModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }