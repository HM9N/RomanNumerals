import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomanNumComponent } from './components/roman-num/roman-num.component';

const routes: Routes = [{
  path: '',
  component: RomanNumComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
