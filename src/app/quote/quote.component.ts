import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
    new Quote('Will Rogers','Don’t Let Yesterday Take Up Too Much Of Today.)', new Date(1998,10,12)),
    new Quote('Confucius','To See What Is Right And Not Do It Is A Lack Of Courage',new Date(1943,12,1)),
    new Quote(' Aristotle','Happiness depends upon ourselves',new Date(2016,9,12)),
    new Quote(' Seneca','It is more fitting for a man to laugh at life than to lament over it',new Date(1918,6,12)),
    new Quote(' Arthur Schopenhauer','The two enemies of human happiness are pain and boredom',new Date(1919,10,18)),
    ];

  constructor() { }
  './quote-detail/quote-detail.component'
  ngOnInit(): void {
  }

}
