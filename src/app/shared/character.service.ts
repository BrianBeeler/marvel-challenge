import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  characterList: Character[] = [
    new Character("Hulk", 1, 'https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg', 'https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg', 'The Hulk is Angry'),
    new Character("Hulk", 2,  'https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg', 'https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg', 'The Hulk is Angry'),
    new Character("Hulk", 3,  'https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg', 'https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg', 'The Hulk is Angry'),
  ]

  characterListChanged = new Subject();

  selectedCharacter: Character = this.characterList[0];

  getSelectedCharacter() {
    return this.selectCharacter;
  }

  fetchCharacters(searchItem) {
    console.log("fetching characters...");
    const ts = + Date.now();
    const privateKey =  '527dea6fbfe11fdbb9ff272eee181c72492a6370';
    const publicKey = '2e12b6dd5533c93c76a4c19feb2876d3';
    const hash = Md5.hashStr(""+ts+privateKey+publicKey);
    let url = 'https:gateway.marvel.com/v1/public/characters?ts='+ts+'&apikey='+publicKey+'&hash='+hash;

    if (searchItem) {
      url +=  "&name="+searchItem;
    }

    // this.http.get(url).pipe(map((response: any)=> {
    //   return response.data.results.map((character) => {

    //     let thumbnailUrl = character.thumbnail.path+'/portrait_small.'+character.thumbnail.extension;

    //     let largeImageUrl = character.thumbnail.path+'/portrait_xlarge.'+character.thumbnail.extension;

    //     console.log(character.comics);
    //     let details;

    //     if (character.comics.items && character.comics.items.length > 0) {
    //       details = "Appears in "+character.comics.available+" comics, including "+character.comics.items[0].name+'.';
    //     } else {
    //       details = "Does not appear in any comics."
    //     }




    //     return new Character(character.name || "No Name", character.id, thumbnailUrl,largeImageUrl, details)
    //   })
    // })).subscribe((characters) => {
    //   this.characterList = characters;
    //   this.selectedCharacter = this.characterList[0]
    //   this.characterListChanged.next();
    // })
  }

  getCharacterList() {
    return [...this.characterList];
  }

  selectCharacter(id) {
    this.selectedCharacter = this.characterList.find((character) => {
      return character.id === id;
    })

  }



}
