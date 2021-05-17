import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from '../shared/character.service';
import { Character } from '../shared/character.model'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private charService: CharacterService, private router: Router) { }

  characterList: Character[] = this.charService.getCharacterList();
  characterListUpdated = this.charService.characterListChanged.subscribe(
    () => {
      this.characterList = this.charService.getCharacterList();
      this.dataType = this.charService.getListType();
    }
  );
  searchTerm = '';
  dataType = this.charService.getListType();

  replace() {
    if (this.dataType.current == "hard coded") {
      this.charService.fetchCharacters("");
    } else {
      this.charService.useClientData();
    }
  }

  searchCharacters() {
    console.log("Searching...", this.searchTerm);
    this.charService.fetchCharacters(this.searchTerm)
  }

  selectCharacter(id) {
    this.charService.selectCharacter(id)
    this.router.navigate(['character-detail'])
  }

  getPagination() {

    let total = this.charService.getTotalCharacters();
    let numberPerPage = 20;

    let pages = [];
    let x = 1;
    for (let i=1; i<= total; i+= numberPerPage) {
      pages.push(x)
      x+=1;
    }
    return pages;

  }

  activePage = 1;

  ngOnInit(): void {
    this.charService.characterListChanged.subscribe(()=> {
      this.characterList = this.charService.getCharacterList();
    })
  }

}
