import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './create-users.dto';

export class AuthenticateDto extends PartialType(CreateUsersDto) {}
