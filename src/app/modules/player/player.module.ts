import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PlayerRoutingModule } from './player-routing.module';
import { IndexPlayerComponent } from './pages/index-player/index-player.component';
import {SharedModule} from '../../shared/shared.module';
import { SongListComponent } from './pages/song-list/song-list.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CreditsDialogComponent} from './pages/song-list/song-list.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PlayerRoutingModule,
    DragScrollModule,
    NgbModule,
  ],
  entryComponents: [CreditsDialogComponent],
  declarations: [IndexPlayerComponent, SongListComponent, CreditsDialogComponent],
})
export class PlayerModule { }
