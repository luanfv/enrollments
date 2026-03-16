import { DomainException } from '../exceptions/domain.exception';
import { EmailVO } from './email.vo';

describe('EmailVO', () => {
  it('SHOULD create an EmailVO with a valid email', () => {
    const emailVO = new EmailVO('test@example.com');
    expect(emailVO.value).toEqual('test@example.com');
  });

  describe('WHEN creating an EmailVO with an invalid email', () => {
    it('SHOULD throw a DomainException', () => {
      expect(() => new EmailVO('invalid-email')).toThrow(
        new DomainException('Invalid email format'),
      );
    });
  });
});
