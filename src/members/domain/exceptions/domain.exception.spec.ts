import { DomainException } from './domain.exception';

describe('DomainException', () => {
  it('SHOULD create a DomainException with the correct message', () => {
    const exception = new DomainException('An error occurred');
    expect(exception.message).toEqual('An error occurred');
    expect(exception.name).toEqual('DomainException');
  });
});
