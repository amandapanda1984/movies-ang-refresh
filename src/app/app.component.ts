import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  watched = [
    new Movie("Ghost Ship", "Horror", 2019),
    new Movie("Shrek", "Comedy", 2019)
  ];

  toWatch = [
    new Movie("The Woman in Black", "Horror", 2019),
    new Movie("Frozen", "Comedy", 2019)
  ];
}
