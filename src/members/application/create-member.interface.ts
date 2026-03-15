type Member = {
  name: string;
  email: string;
  birthdate: string;
  gender: string;
};

export class CreateMemberInput {
  readonly name: string;
  readonly email: string;
  readonly birthdate: Date;
  readonly gender?: string;

  constructor(member: Member) {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    const match = member.birthdate.match(regex);
    if (!match)
      throw new Error('Invalid birthdate format. Expected DD/MM/YYYY');
    const [, day, month, year] = match;
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    this.name = member.name;
    this.email = member.email;
    this.gender = member?.gender;
    this.birthdate = date;
  }
}

export class CreateMemberOutput {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly birthdate: Date,
    public readonly gender: string,
    public readonly createdAt: Date,
  ) {}
}

export interface ICreateMemberService {
  execute(createMemberDto: CreateMemberInput): Promise<CreateMemberOutput>;
}
