import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { EntityManager, Repository } from 'typeorm'
import { Users } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserRoleDto } from '../roles/dto/create-user-role.dto'
import { UserRoles } from '../roles/entities/user-role.entity'
import {Roles} from "../roles/entities/role.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private readonly itemRepository: Repository<Users>, private readonly entityManager: EntityManager) {
    }

  async create(createUserDto: CreateUserDto) {
    const newUser = new Users(createUserDto)
    const user_relation = new UserRoles({user: newUser, role: new Roles({id: 1}) })
    await this.entityManager.save(newUser)
    return this.entityManager.save(user_relation)
  }

  async findAll() {
    return this.itemRepository.find()
  }

  async findOne(id: number) {
    return this.itemRepository.findOneBy({ id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.itemRepository.findOneBy({ id })
    user.first_name = updateUserDto.first_name
    user.last_name = updateUserDto.last_name
    user.password = updateUserDto.password
    user.email = updateUserDto.email
    await this.entityManager.save(user)
  }

  async remove(id: number) {
    await this.itemRepository.delete(id)
  }
}
