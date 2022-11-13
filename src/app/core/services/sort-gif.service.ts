import { Injectable } from '@angular/core';
import { GifData, SortingEnum } from '../model/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class SortGifService {
  //private _currentSorting: string = SortingEnum.none;

  //private _gifSorted: Array<GifData> = [];

  constructor() {

  }

  gifToSorted(gifs: GifData[], sortCondition: string) {
   
    return this.manageSorting(gifs,sortCondition );
  }

  private sortDateByAscending(gifs: GifData[]) {
    return gifs.sort((a, b) => {
      return Date.parse(a.import_datetime) - Date.parse(b.import_datetime);
    });
  }

  private sortDateByDescending(gifs: GifData[]) {
    return gifs.sort((a, b) => {
      return Date.parse(b.import_datetime) - Date.parse(a.import_datetime);
    });
  }

  private manageSorting(gifs: GifData[],sortCondition: string) {
    switch (sortCondition) {
      case SortingEnum.asc:
        return this.sortDateByAscending(gifs);
      case SortingEnum.desc:
        return this.sortDateByDescending(gifs);
      default:
        return gifs;
    }
  }
}
