import { DomainException } from '../exceptions/domain.exception';
import { GenderVO } from './gender.vo';

describe('GenderVO', () => {
  it.each`
    input        | expected
    ${'male'}    | ${'male'}
    ${'female'}  | ${'female'}
    ${'other'}   | ${'other'}
    ${undefined} | ${'other'}
  `(
    'SHOULD create a GenderVO with valid gender "$expected"',
    ({ input, expected }) => {
      const genderVO = new GenderVO(input);
      expect(genderVO.value).toEqual(expected);
    },
  );

  describe('WHEN creating a GenderVO with an invalid gender', () => {
    it('SHOULD throw a DomainException', () => {
      expect(() => new GenderVO('invalid')).toThrow(
        new DomainException('Invalid gender'),
      );
    });
  });
});
