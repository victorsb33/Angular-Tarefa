import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { ListaTarefaApiComponent } from './pages/lista-tarefa-api/lista-tarefa-api.component';
import { ListaTarefaLocalComponent } from './pages/lista-tarefa-local/lista-tarefa-local.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      { path: 'lista-tarefa-local', component: ListaTarefaLocalComponent},
      { path: 'lista-tarefa-api', component: ListaTarefaApiComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
