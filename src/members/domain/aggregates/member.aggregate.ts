import { randomUUID } from 'node:crypto';
import { EmailVO } from './email.vo';
import { GenderVO } from './gender.vo';
import { BirthdateVO } from './birthdate.vo';

type MemberAggregateProps = {
  id: string;
  name: string;
  email: EmailVO;
  gender: GenderVO;
  birthdate: BirthdateVO;
  createdAt: Date;
};

type MemberAggregateCreateProps = {
  name: string;
  email: string;
  gender?: string;
  birthdate: Date;
};

type MemberAggregateRestoreProps = {
  id: string;
  name: string;
  email: string;
  gender?: string;
  birthdate: Date;
  createdAt: Date;
};

export class MemberAggregate {
  private _props: MemberAggregateProps;

  private constructor(
    id: string,
    name: string,
    email: EmailVO,
    gender: GenderVO,
    birthdate: BirthdateVO,
    createdAt: Date,
  ) {
    this._props = {
      id,
      name,
      email,
      gender,
      birthdate,
      createdAt,
    };
  }

  public static create(props: MemberAggregateCreateProps): MemberAggregate {
    const email = new EmailVO(props.email);
    const gender = new GenderVO(props.gender);
    const birthdate = new BirthdateVO(props.birthdate);
    const id = randomUUID();
    const createdAt = new Date();

    return new MemberAggregate(
      id,
      props.name,
      email,
      gender,
      birthdate,
      createdAt,
    );
  }

  public static restore(props: MemberAggregateRestoreProps): MemberAggregate {
    const email = new EmailVO(props.email);
    const gender = new GenderVO(props.gender);
    const birthdate = new BirthdateVO(props.birthdate);

    return new MemberAggregate(
      props.id,
      props.name,
      email,
      gender,
      birthdate,
      props.createdAt,
    );
  }

  public get id(): string {
    return this._props.id;
  }

  public get name(): string {
    return this._props.name;
  }

  public get email(): string {
    return this._props.email.value;
  }

  public get gender(): string {
    return this._props.gender.value;
  }

  public get birthdate(): Date {
    return this._props.birthdate.value;
  }

  public get createdAt(): Date {
    return this._props.createdAt;
  }
}
