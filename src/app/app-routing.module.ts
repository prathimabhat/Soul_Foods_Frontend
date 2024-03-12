import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        // loadChildren: () =>
          //import('./recipes/recipes.module').then((m) => m.RecipesModule),
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  