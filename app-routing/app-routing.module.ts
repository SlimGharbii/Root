import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
const routes=  [
{ path: 'componente',
 component: componenteComponent

},
{
  path: 'componentees',
  component: componenteesComponent
}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
