import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { noop, Observable } from 'rxjs';
import {
  GifData,
  GiphyResult,
  SortingEnum,
} from 'src/app/core/model/gif.interface';
import { SortGifService } from 'src/app/core/services/sort-gif.service';
import { environment } from 'src/environments/environment';

const httpParams = new HttpParams().set('api_key', environment.ApiKey);

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  static readonly baseUrl = 'https://api.giphy.com/v1/gifs/';
  private _currentPage: number = 0;
  private _resultLimit: number = 25;
  private _currentSearchKey: string;
  private _giftsRetrieved: GifData[] = [];
  private _totalCount: number;
  private _currentSort: SortingEnum = SortingEnum.none;

  constructor(private http: HttpClient, private _sortSrv: SortGifService) {}

  /************************** API *******************************/
  trendingGIF(): Observable<GiphyResult> {
    return this.http.get<GiphyResult>(`${GiphyService.baseUrl}trending`, {
      params: httpParams,
    });
  }

  private search(searchKey: string, offset: number): Observable<GiphyResult> {
    return this.http.get<GiphyResult>(`${GiphyService.baseUrl}search`, {
      params: httpParams
        .set('q', searchKey)
        .set('offset', offset)
        .set('limit', this._resultLimit),
    });
  }

  public get currentSort() {
    return this._currentSort;
  }
  public get currentSearchkey() {
    return this._currentSearchKey;
  }

  public get currentGiftsRetrieved() {
    return this._giftsRetrieved;
  }

  searchEndPoint(searchKey: string): Observable<GiphyResult> {
    this._currentSearchKey = searchKey;
    this._currentPage = 0;
    return this.search(searchKey, this._currentPage);
  }

  nextResult() {
    this._currentPage++;
    const offset = this._currentPage * this._resultLimit;
    return this.search(this._currentSearchKey, offset);
  }

  onSortChange(sort: SortingEnum) {
    this._giftsRetrieved = this._sortSrv.gifToSorted(
      this._giftsRetrieved,
      sort
    );
    this._currentSort = sort;
    return this._giftsRetrieved;
  }

  public searchGifs(searchInput: string) {
    this.searchEndPoint(searchInput).subscribe((result) => {
      if (!result) {
        this._giftsRetrieved = [];
        return;
      }

      this._totalCount = result.pagination.total_count;

      this._giftsRetrieved = this._sortSrv.gifToSorted(
        result.data,
        this._currentSort
      );
    });
  }

  public onScrollNext() {
    if(this._giftsRetrieved.length === this._totalCount)
      return;
    this.nextResult().subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
        this._giftsRetrieved = this._giftsRetrieved.concat(res.data);
        this._giftsRetrieved = this._sortSrv.gifToSorted(
          this._giftsRetrieved,
          this._currentSort
        );
      },
      error: noop,
      complete: noop,
    });
  }

  public loadTrandingGifs() {
    this.trendingGIF().subscribe((result) => {
      if (!result) {
        return;
      }
      this._giftsRetrieved = this._sortSrv.gifToSorted(
        result.data,
        this._currentSort
      );
    });
  }
}
