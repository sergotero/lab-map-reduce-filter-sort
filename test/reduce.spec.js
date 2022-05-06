const { sum, bestStudent, countWords } = require('../src/reduce');

describe('Reduce functions', () => {

  describe('sum', () => {

    it('should be an function', () => {
      expect(sum instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(sum([])).not.toBe(undefined);
    });

    it('should sum all numbers', () => {
      const numbers = [1, 2, 3, 4];
      const expected = 10;
      expect(sum(numbers)).toStrictEqual(expected);
    });

  });

  describe('bestStudent', () => {

    it('should be an function', () => {
      expect(bestStudent instanceof Function).toBeTruthy();
    });

    it('should return undefined if the array is empty', () => {
      expect(bestStudent([])).toBe(undefined);
    });

    it('should return the best student', () => {
      const students = [
        { name: 'Futanito', grade: 6 },
        { name: 'Menganito', grade: 5 },
        { name: 'Juanito', grade: 9 }
      ];
      const expected = { name: 'Juanito', grade: 9 };
      expect(bestStudent(students)).toStrictEqual(expected);
    });

  });

  describe('countWords', () => {

    it('should be an function', () => {
      expect(countWords instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(countWords([])).not.toBe(undefined);
    });

    it('should return words occurrences', () => {
      const words = ["dog", "cat", "dog", "cat", "fish", "man", "woman", "woman"];
      const expected = {
        dog: 2,
        cat: 2,
        fish: 1,
        man: 1,
        woman: 2,
      }
      ;
      expect(countWords(words)).toStrictEqual(expected);
    });

  });


});