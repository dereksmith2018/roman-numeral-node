import { Translation } from '../src/roman-numeral.js';

describe('Translation', function(){
  it('should take a number and pair it with letter', function(){
    var newTranslation = new Translation(5);
    expect(newTranslation.translate()).toEqual("V");
  });
});