const { getEvens, clean, filterBySkill } = require('../src/filter');

describe('Filter functions', () => {

  describe('getEvens', () => {

    it('should be an function', () => {
      expect(getEvens instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(getEvens([])).not.toBe(undefined);
    });

    it('should return only even numbers', () => {
      const numbers = [1, 2, 3, 4];
      const expected = [2, 4];
      expect(getEvens(numbers)).toStrictEqual(expected);
    });

  });

  describe('clean', () => {

    it('should be an function', () => {
      expect(clean instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(clean([])).not.toBe(undefined);
    });

    it('should clean undefined or nulls', () => {
      const elements = [undefined, null, 3, 4, undefined, 5, false, "a"];
      const expected = [3, 4, 5, false, "a"];
      expect(clean(elements)).toStrictEqual(expected);
    });

  });

  describe('filterBySkill', () => {

    it('should be an function', () => {
      expect(filterBySkill instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(filterBySkill([])).not.toBe(undefined);
    });

    it('should filter by Bash skill', () => {
      const users = [
        {
          name: 'Juanito',
          skills: ['JS', 'Java']
        },
        {
          name: 'Menganito',
          skills: ['HTML', 'CSS']
        },
        {
          name: 'Futanito',
          skills: ['Bash']
        }
      ];
      const expected = [
        {
          name: 'Futanito',
          skills: ['Bash']
        }
      ];
      expect(filterBySkill(users, 'Bash')).toStrictEqual(expected);
    });

  });


});