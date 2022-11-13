import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GifData } from 'src/app/core/model/gif.interface';
import { FavoritesService } from 'src/app/feature/Favorites/services/favorites.service';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss'],
})
export class GifDetailComponent implements OnInit {
  constructor(
    public config: DynamicDialogConfig,
    public favoritesService: FavoritesService
  ) {}

  gifData: GifData;
  isAlreadyFavorites: boolean;

  ngOnInit(): void {
    this.gifData = this.config.data as GifData;
    this.isAlreadyFavorites = this.favoritesService.isAlAlreadyPresentGif(
      this.gifData
    );
  }

  addToFavorites() {
    this.isAlreadyFavorites = true;
    if (this.favoritesService.isAlAlreadyPresentGif(this.gifData)) {
      return;
    }
    this.favoritesService.addToFavorites(this.gifData);
  }

  removeToFavorites() {
    this.favoritesService.removeFavorite(this.gifData);
    this.isAlreadyFavorites = false;
  }
}
