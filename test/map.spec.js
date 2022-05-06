const { parseNumbers, sumEvenSubOdd, buildStudentsAvg } = require('../src/map');

describe('Map functions', () => {

  describe('parseNumbers', () => {

    it('should be an function', () => {
      expect(parseNumbers instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(parseNumbers([])).not.toBe(undefined);
    });

    it('should transform string to ints', () => {
      const numbersAsStrings = ["1", "2", "3"];
      const expected = [1, 2, 3];
      expect(parseNumbers(numbersAsStrings)).toStrictEqual(expected);
    });

    it('should transform non numeric elements to -1', () => {
      const numbersAsStrings = ["a", "2", "b"];
      const expected = [-1, 2, -1];
      expect(parseNumbers(numbersAsStrings)).toStrictEqual(expected);
    });

  });

  describe('sumEvenSubOdd', () => {

    it('should be an function', () => {
      expect(sumEvenSubOdd instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(sumEvenSubOdd([])).not.toBe(undefined);
    });

    it('should even +1 and odd -1', () => {
      const numbers = [1, 2, 3, 4];
      const expected = [0, 3, 2, 5];
      expect(sumEvenSubOdd(numbers)).toStrictEqual(expected);
    });

  });

  describe('buildStudentsAvg', () => {

    it('should be an function', () => {
      expect(buildStudentsAvg instanceof Function).toBeTruthy();
    });

    it('should not return undefined ', () => {
      expect(buildStudentsAvg([])).not.toBe(undefined);
    });

    it('should build marks avg', () => {
      const students = [
        {
          name: 'Juanito',
          marks: [
            { subject: 'Maths', grade: 3 },
            { subject: 'History', grade: 3 },
            { subject: 'Literature', grade: 9 },
          ]
        },
        {
          name: 'Menganito',
          marks: [
            { subject: 'Maths', grade: 10 },
            { subject: 'History', grade: 10 },
            { subject: 'Literature', grade: 1 },
          ]
        },
        {
          name: 'Futanito',
          marks: [
            { subject: 'Maths', grade: 8 },
            { subject: 'History', grade: 8 },
            { subject: 'Literature', grade: 8 },
          ]
        }
      ];
      const expected = [
        {
          name: 'Juanito',
          marks: [
            { subject: 'Maths', grade: 3 },
            { subject: 'History', grade: 3 },
            { subject: 'Literature', grade: 9 },
          ],
          avg: 5
        },
        {
          name: 'Menganito',
          marks: [
            { subject: 'Maths', grade: 10 },
            { subject: 'History', grade: 10 },
            { subject: 'Literature', grade: 1 },
          ],
           avg: 7
        },
        {
          name: 'Futanito',
          marks: [
            { subject: 'Maths', grade: 8 },
            { subject: 'History', grade: 8 },
            { subject: 'Literature', grade: 8 },
          ],
          avg: 8
        }
      ];
      expect(buildStudentsAvg(students)).toStrictEqual(expected);
    });

  });


});