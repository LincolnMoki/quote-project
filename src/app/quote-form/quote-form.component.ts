import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("", "", new Date());

  @Output() AddQuote = new EventEmitter<Quote>();

   submitQuote(){
   this.AddQuote.emit(this.newQuote);

  this.newQuote = new Quote("","",new Date());
   }

  constructor() { }

  ngOnInit(): void {
  }

}
