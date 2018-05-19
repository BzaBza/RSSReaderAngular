import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeedListComponent } from './component/feed-list/feed-list.component';
import { MessageListComponent } from './component/message-list/message-list.component';
import { MessageComponent } from './component/message/message.component';
import { StatisticsComponent } from './component/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    MessageListComponent,
    MessageComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
