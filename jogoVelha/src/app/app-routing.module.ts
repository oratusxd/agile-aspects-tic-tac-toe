import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponentComponent } from './menu-component/menu-component.component';

const routes: Routes = [
  { path: '', component: MenuComponentComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
