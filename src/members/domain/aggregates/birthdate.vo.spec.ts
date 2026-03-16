import { DomainException } from '../exceptions/domain.exception';
import { BirthdateVO } from './birthdate.vo';

describe('BirthdateVO unit tests', () => {
  it('SHOULD create a BirthdateVO with a valid date', () => {
    const birthdate = new Date('2000-01-01');
    const birthdateVO = new BirthdateVO(birthdate);
    expect(birthdateVO.value).toEqual(new Date('2000-01-01T00:00:00.000Z'));
  });

  describe('WHEN creating a BirthdateVO with a future date', () => {
    it('SHOULD throw a DomainException', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      expect(() => new BirthdateVO(futureDate)).toThrow(
        new DomainException('Birthdate cannot be in the future'),
      );
    });
  });
});
