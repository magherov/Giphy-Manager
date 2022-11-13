import { Component, OnInit } from '@angular/core';
import { GifData } from 'src/app/core/model/gif.interface';
import { FavoritesService } from './services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(private favoritesGifService: FavoritesService) {}

  ngOnInit(): void {}

  public get favoriteGifList() {
    return this.favoritesGifService.currentFavorites;
  }
}
