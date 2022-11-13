import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchGifComponent } from './feature/search-gif/components/search-gif.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GifListComponent } from './feature/search-gif/components/gif-list/gif-list.component';
import { CardModule } from 'primeng/card';
import { GifDetailComponent } from './feature/search-gif/components/gif-detail/gif-detail.component';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { PlaceholderGifComponent } from './feature/search-gif/components/placeholder-gif/placeholder-gif.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FavoritesComponent } from './feature/Favorites/favorites.component';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    SearchGifComponent,
    GifListComponent,
    GifDetailComponent,
    PlaceholderGifComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    SkeletonModule,
    DynamicDialogModule,
    ProgressSpinnerModule,
    TooltipModule,
    DropdownModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
