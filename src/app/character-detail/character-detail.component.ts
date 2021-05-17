import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private charService: CharacterService) { }

  character: Character = this.charService.selectedCharacter;

  ngOnInit(): void {

  }

}
