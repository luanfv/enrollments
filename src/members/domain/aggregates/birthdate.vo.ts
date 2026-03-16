import { DomainException } from '../exceptions/domain.exception';

export class BirthdateVO {
  private readonly birthdate: Date;

  constructor(birthdate: Date) {
    if (birthdate > new Date()) {
      throw new DomainException('Birthdate cannot be in the future');
    }
    this.birthdate = new Date(
      Date.UTC(
        birthdate.getUTCFullYear(),
        birthdate.getUTCMonth(),
        birthdate.getUTCDate(),
      ),
    );
  }

  public get value(): Date {
    return this.birthdate;
  }
}
