import { Test, TestingModule } from '@nestjs/testing';
import { createMock } from '@golevelup/ts-jest';
import { CreateMemberService } from './create-member.service';
import { MembersRepository } from '../infra/databases/members.repository';
import { AlreadyExistsException } from '../domain/exceptions/already-exists.exception';

describe('CreateMemberService', () => {
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      providers: [
        CreateMemberService,
        {
          provide: MembersRepository,
          useValue: createMock<MembersRepository>(),
        },
      ],
    }).compile();
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  it('SHOULD be defined', () => {
    const service = moduleRef.get<CreateMemberService>(CreateMemberService);
    expect(service).toBeDefined();
  });

  const membersInfos = [
    {
      input: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        gender: 'male',
        birthdate: new Date('1990-01-01'),
      },
      output: {
        id: expect.any(String),
        name: 'John Doe',
        email: 'john.doe@example.com',
        birthdate: new Date('1990-01-01'),
        gender: 'male',
        createdAt: expect.any(Date),
      },
    },
    {
      input: {
        name: 'Carla Smith',
        email: 'carla.smith@example.com',
        gender: 'female',
        birthdate: new Date('1992-05-15'),
      },
      output: {
        id: expect.any(String),
        name: 'Carla Smith',
        email: 'carla.smith@example.com',
        birthdate: new Date('1992-05-15'),
        gender: 'female',
        createdAt: expect.any(Date),
      },
    },
    {
      input: {
        name: 'anonymous',
        email: 'anonymous@example.com',
        gender: 'other',
        birthdate: new Date('2003-02-05'),
      },
      output: {
        id: expect.any(String),
        name: 'anonymous',
        email: 'anonymous@example.com',
        birthdate: new Date('2003-02-05'),
        gender: 'other',
        createdAt: expect.any(Date),
      },
    },
    {
      input: {
        name: 'Ted',
        email: 'ted@example.com',
        birthdate: new Date('2008-02-05'),
      },
      output: {
        id: expect.any(String),
        name: 'Ted',
        email: 'ted@example.com',
        birthdate: new Date('2008-02-05'),
        gender: 'other',
        createdAt: expect.any(Date),
      },
    },
  ];

  it.each`
    input                    | expected
    ${membersInfos[0].input} | ${membersInfos[0].output}
    ${membersInfos[1].input} | ${membersInfos[1].output}
    ${membersInfos[2].input} | ${membersInfos[2].output}
    ${membersInfos[3].input} | ${membersInfos[3].output}
  `(
    'SHOULD create a member with the provided info',
    async ({ input, expected }) => {
      const service = moduleRef.get<CreateMemberService>(CreateMemberService);
      const repository = moduleRef.get<MembersRepository>(MembersRepository);
      jest.spyOn(repository, 'existsByEmail').mockResolvedValue(false);
      const result = await service.execute(input);
      expect(result).toEqual(expected);
    },
  );

  it('SHOULD call the repository with the correct data', async () => {
    const service = moduleRef.get<CreateMemberService>(CreateMemberService);
    const repository = moduleRef.get<MembersRepository>(MembersRepository);
    const spy = jest.spyOn(repository, 'create');
    jest.spyOn(repository, 'existsByEmail').mockResolvedValue(false);
    await service.execute({
      name: 'John Doe',
      email: 'john.doe@example.com',
      gender: 'male',
      birthdate: new Date('1990-01-01'),
    });
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'John Doe',
        email: 'john.doe@example.com',
        gender: 'male',
        birthdate: new Date('1990-01-01'),
        id: expect.any(String),
        createdAt: expect.any(Date),
      }),
    );
  });

  describe('WHEN email already registered', () => {
    it('SHOULD throw an AlreadyExistsException', async () => {
      const service = moduleRef.get<CreateMemberService>(CreateMemberService);
      const repository = moduleRef.get<MembersRepository>(MembersRepository);
      jest.spyOn(repository, 'existsByEmail').mockResolvedValue(true);
      await expect(
        service.execute({
          name: 'John Doe',
          email: 'john.doe@example.com',
          gender: 'male',
          birthdate: new Date('1990-01-01'),
        }),
      ).rejects.toThrow(
        new AlreadyExistsException('Email already used by another member'),
      );
    });
  });
});
