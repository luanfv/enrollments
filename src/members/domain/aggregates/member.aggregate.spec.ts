import { MemberAggregate } from './member.aggregate';

describe('MemberAggregate', () => {
  describe('create', () => {
    it('SHOULD create a MemberAggregate with valid properties', () => {
      const member = MemberAggregate.create({
        name: 'John Doe',
        email: 'john.doe@example.com',
        gender: 'male',
        birthdate: new Date('1990-01-01'),
      });
      expect(member.name).toEqual('John Doe');
      expect(member.email).toEqual('john.doe@example.com');
      expect(member.gender).toEqual('male');
      expect(member.birthdate).toEqual(new Date('1990-01-01'));
    });
  });

  describe('restore', () => {
    it('SHOULD restore a MemberAggregate with valid properties', () => {
      const member = MemberAggregate.restore({
        id: '123',
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        gender: 'female',
        birthdate: new Date('1990-01-01'),
        createdAt: new Date(),
      });
      expect(member.id).toEqual('123');
      expect(member.name).toEqual('Jane Doe');
      expect(member.email).toEqual('jane.doe@example.com');
      expect(member.gender).toEqual('female');
      expect(member.birthdate).toEqual(new Date('1990-01-01'));
    });
  });
});
