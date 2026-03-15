export class EmailVO {
  private readonly email: string;

  constructor(email: string) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email format');
    }
    this.email = email;
  }

  public get value(): string {
    return this.email;
  }
}
