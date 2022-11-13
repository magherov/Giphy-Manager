import { Component, OnInit } from '@angular/core';
import {
  GifData,
  SelectOption,
  SortingEnum,
} from 'src/app/core/model/gif.interface';
import { GiphyService } from '../service/giphy.service';

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.scss'],
})
export class SearchGifComponent implements OnInit {
  searchInput: string;
  selectOptions: SelectOption[] = [
    {
      name: 'none',
      code: SortingEnum.none,
    },
    {
      name: 'Crescente',
      code: SortingEnum.asc,
    },
    {
      name: 'Decrescente',
      code: SortingEnum.desc,
    },
  ];

  selectedOption: string;

  constructor(private giphyService: GiphyService) {}

  public get gifDataList(): GifData[] {
    return this.giphyService.currentGiftsRetrieved;
  }

  ngOnInit(): void {
    this.selectedOption = this.giphyService.currentSort;
    this.searchInput = this.giphyService.currentSearchkey;

    if (!this.searchInput && this.gifDataList.length === 0) {
      this.giphyService.loadTrandingGifs();
    }
  }

  public searchGifs() {
    this.giphyService.searchGifs(this.searchInput);
  }

  public sortGif() {
    this.giphyService.onSortChange(this.selectedOption as SortingEnum);
  }

  public onScrollHandler() {
    this.giphyService.onScrollNext();
  }
}
