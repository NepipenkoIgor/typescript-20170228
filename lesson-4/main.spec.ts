import { expect } from 'chai';
import { summator } from './main';

describe(
  'test summator', () => {
    it(
      'only nambers', () => {
        expect(summator(1, 2, 3, 4))
          .equal(10);
      }
    );
    it(
      'number with words', () => {
        expect(summator(1, 2, 3, 'sdasda', 'sadasda'))
          .equal(6);
      }
    );
    it(
      'number with string', () => {
        expect(summator(1, 2, 3, '4', '5'))
          .equal(15);
      }
    );
  }
);