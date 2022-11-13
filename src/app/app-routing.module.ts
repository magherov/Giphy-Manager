import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './feature/Favorites/favorites.component';
import { SearchGifComponent } from './feature/search-gif/components/search-gif.component';

const routes: Routes = [
  {
    path: '',
    component: SearchGifComponent,
  },
  {
    path: 'Gif',
    component: SearchGifComponent
  },
  {
    path: 'favorites', 
    component: FavoritesComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
