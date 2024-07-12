import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalorieCalculatorComponent } from './components/calorie-calculator/calorie-calculator.component'; // Ajusta la ruta si es necesario

const routes: Routes = [
  { path: '', component: CalorieCalculatorComponent }, // Ruta principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
