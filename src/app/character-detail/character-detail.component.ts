import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  animations: [
    trigger('rotatedState', [
      state('normal', style({
        transform: 'rotate(0)'
      })),
      state('flipped', style({
        transform: 'rotate(180deg)'
      })),
      transition("normal => flipped", animate(300)),
      transition("flipped => normal", animate(800))
    ])
  ]
})
export class CharacterDetailComponent implements OnInit {

  constructor(private charService: CharacterService) { }

  state = 'normal'

  animate() {
    this.state == 'normal' ? this.state = 'flipped' : this.state = 'normal';
  }

  character: Character = this.charService.selectedCharacter;

  ngOnInit(): void {

  }

}
