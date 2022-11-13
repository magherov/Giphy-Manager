import { Injectable } from '@angular/core';
import { GifData, SortingEnum } from 'src/app/core/model/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public static readonly FAVORITES: string = 'gifts-favorites';
  public static readonly FAVORITES_SORT: string = 'gifts-favorites_sort';

  private _favoriteGifs: Array<GifData> = [];
  private _currentSorting: SortingEnum = SortingEnum.none;

  constructor() {
    const favoritesFound: string = window.localStorage.getItem(
      FavoritesService.FAVORITES
    );
    if (favoritesFound) {
      this._favoriteGifs = JSON.parse(favoritesFound) as Array<GifData>;
    }
  }

  public get currentFavorites() {
    return this._favoriteGifs;
  }

  public get currentSorting() {
    return this._currentSorting;
  }

  addToFavorites(gif: GifData) {
    this._favoriteGifs.push(gif);
    window.localStorage.setItem(
      FavoritesService.FAVORITES,
      JSON.stringify(this._favoriteGifs)
    );
  }

  isAlAlreadyPresentGif(gif: GifData): boolean {
    const favouritesFound = this._favoriteGifs.find(
      (gifFavorite) => gifFavorite.id === gif.id
    );
    if (!favouritesFound) {
      return false;
    }

    return true;
  }

  public removeFavorite(gif: GifData) {
    const newArray = this._favoriteGifs.filter((x) => x.id !== gif.id);
    this._favoriteGifs = newArray;

    window.localStorage.setItem(
      FavoritesService.FAVORITES,
      JSON.stringify(this._favoriteGifs)
    );
  }

  public cleanFavorites() {
    window.localStorage.removeItem(FavoritesService.FAVORITES);
    this._favoriteGifs = [];
  }
}
