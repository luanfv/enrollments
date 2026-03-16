import { IsNotEmpty, Matches } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'email cannot be empty' })
  email: string;

  @IsNotEmpty({ message: 'birthdate cannot be empty' })
  @Matches(/^\d{2}\/\d{2}\/\d{4}$/, {
    message: 'birthdate must be in DD/MM/YYYY format',
  })
  birthdate: string;

  @IsNotEmpty({ message: 'gender cannot be empty' })
  gender: string;
}
