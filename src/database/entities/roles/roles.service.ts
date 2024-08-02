import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Roles} from "./roles.entity";
import {Repository} from "typeorm";

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Roles) private rolesRepository: Repository<Roles>) {
    }
}
