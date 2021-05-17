import { Component, OnInit } from '@angular/core';
import { CharacterService } from './shared/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private charService: CharacterService) {

  }

  title = 'marvel-app3';

  ngOnInit() {

  }
}
