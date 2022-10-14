import { Users } from './entities/users.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-course.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    const user = this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return user;
  }

  async create(createUsersDto: CreateUsersDto) {
    const user = this.usersRepository.create({
      ...createUsersDto,
    });
    return this.usersRepository.save(user);
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    // Vewrificando se há uma tag criada para atualizar

    const user = await this.usersRepository.preload({
      id: id,
      ...updateUsersDto,
    });

    if (!user) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.usersRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.usersRepository.remove(user);
  }
}
