import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmComponent } from './components/algorithm/algorithm.component';

const routes: Routes = [

  // --
  // -- Acceso publico de usuarios:
  // -- 

  {
    path: 'apriori',
    component: AlgorithmComponent,
    
  },
  { path: '**', pathMatch: 'full', component: AlgorithmComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
