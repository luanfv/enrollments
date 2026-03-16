import { MemberAggregate } from '../../domain/aggregates/member.aggregate';
import { MembersEntity } from './members.entity';

export class MembersMapper {
  static toEntity(aggregate: MemberAggregate): MembersEntity {
    const entity = new MembersEntity();
    entity.id = aggregate.id;
    entity.name = aggregate.name;
    entity.email = aggregate.email;
    entity.gender = aggregate.gender;
    entity.birthdate = aggregate.birthdate;
    entity.createdAt = aggregate.createdAt;
    return entity;
  }

  static toAggregate(entity: MembersEntity): MemberAggregate {
    return MemberAggregate.restore({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      gender: entity.gender,
      birthdate: entity.birthdate,
      createdAt: entity.createdAt,
    });
  }
}
