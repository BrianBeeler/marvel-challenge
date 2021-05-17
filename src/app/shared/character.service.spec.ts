import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Character } from './character.model';
import { CharacterService } from './character.service';


describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CharacterService);
    service.characterList = [ new Character("Hulk", 1, 'smallurl.jpeg', 'largeurl.jpeg', 'The Hulk is Angry'),
                              new Character("Hulk", 2, 'smallurl.jpeg', 'largeurl.jpeg', 'The Hulk is Angry'),
                              new Character("Hulk", 3, 'smallurl.jpeg', 'largeurl.jpeg', 'The Hulk is Angry'),
                            ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a character list, once initiated', () => {
    expect(service.characterList).toBeTruthy
  })
  it('should have a selected character, once initiated', () => {
    expect(service.selectedCharacter).toBeTruthy
  })
  it('should be able to get a character from the list of characters', () => {
    expect(service.selectCharacter(2)).toEqual(service.characterList[1]);
  })
});
