export class GenderVO {
  private readonly gender: string;

  constructor(gender?: string) {
    switch (gender?.toLowerCase()) {
      case undefined:
      case null:
        this.gender = 'other';
        break;

      case 'male':
      case 'female':
      case 'other':
        this.gender = gender.toLowerCase();
        break;

      default:
        throw new Error('Invalid gender');
    }
  }

  public get value(): string {
    return this.gender;
  }
}
