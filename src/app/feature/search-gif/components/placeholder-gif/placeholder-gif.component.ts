import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { GifData } from 'src/app/core/model/gif.interface';
import { FavoritesService } from 'src/app/feature/Favorites/services/favorites.service';
import { GifDetailComponent } from '../gif-detail/gif-detail.component';

@Component({
  selector: 'app-placeholder-gif',
  templateUrl: './placeholder-gif.component.html',
  styleUrls: ['./placeholder-gif.component.scss'],
})
export class PlaceholderGifComponent implements OnInit {
  @Input() gif: GifData;

  loading: boolean = true;
  constructor(public _dialogService: DialogService, private _favoriteService: FavoritesService) {}

  ngOnInit(): void {}

  onLoadEventHandler() {
    //se si vuole di piu l'effetto di caricamento va impostato un setTimeOut 
    // setTimeout(() => {
    //   this.loading = false;
    // }, 3000);
    this.loading = false;
  }

  removeGifFromFavorites(){
    this._favoriteService.removeFavorite(this.gif)
  }

  openDetail() {
    this._dialogService.open(GifDetailComponent, {
      data: this.gif,
      header: `"${this.gif.title}"`,
      width: '50%',
      height: '50%',
      closable: true
    });
  }
}
