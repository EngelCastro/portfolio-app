import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public imag: string;
  constructor() { 
    this.imag='';
  }

  ngOnInit(): void {
    this.imag = 'https://picsum.photos/id/335/536/354'
   // this.imag = 'https://cnnespanol.cnn.com/wp-content/uploads/2015/06/150601115126-01-in2white.jpg?quality=100&strip=info'
     }

}
