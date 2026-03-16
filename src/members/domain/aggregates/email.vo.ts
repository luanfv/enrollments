import { DomainException } from '../exceptions/domain.exception';

export class EmailVO {
  private readonly email: string;

  constructor(email: string) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new DomainException('Invalid email format');
    }
    this.email = email;
  }

  public get value(): string {
    return this.email;
  }
}
