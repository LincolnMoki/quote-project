import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { PostTimePipe } from './post-time.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { MomentModule } from 'ngx-moment';
import { HighlightsDirective } from './highlights.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    PostTimePipe,
    QuoteFormComponent,
    QuoteDetailsComponent,
    HighlightsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
