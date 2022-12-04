import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { GifData } from 'src/app/core/model/gif.interface';
import { GiphyService } from '../../service/giphy.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss'],
})
export class GifListComponent {
  constructor(
    public dialogService: DialogService,
    private _giphyService: GiphyService
  ) {}
  @Input() gifs: GifData[];
  @Output() onScrollEvent: EventEmitter<any> = new EventEmitter();

  @HostListener('window:scroll')
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max - 10) {
      if (this._giphyService.scrollServed$.value) {
        this.onScrollEvent.emit();
        this._giphyService.scrollServed$.next(false);
      }
    }
  }
}
