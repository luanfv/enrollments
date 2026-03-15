export class BirthdateVO {
  private readonly birthdate: Date;

  constructor(birthdate: Date) {
    if (birthdate > new Date()) {
      throw new Error('Birthdate cannot be in the future');
    }
    birthdate.setHours(0, 0, 0, 0);
    this.birthdate = birthdate;
  }

  public get value(): Date {
    return this.birthdate;
  }
}
