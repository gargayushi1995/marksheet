import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
const routes: Routes = [
    {path: '', component: QuestionComponent},
    {path:'marksheet', component: MarksheetComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }