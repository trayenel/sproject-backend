import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserRoles} from "./userRoles.entity";

@Injectable()
export class UserRolesService {
    constructor(@InjectRepository(UserRoles) private rolesRepository: Repository<UserRoles>) {
    }
}
