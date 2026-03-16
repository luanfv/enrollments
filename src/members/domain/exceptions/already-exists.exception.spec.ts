import { AlreadyExistsException } from './already-exists.exception';

describe('AlreadyExistsException', () => {
  it('SHOULD create an AlreadyExistsException with the correct message', () => {
    const exception = new AlreadyExistsException('Member already exists');
    expect(exception.message).toEqual('Member already exists');
    expect(exception.name).toEqual('AlreadyExistsException');
  });
});
