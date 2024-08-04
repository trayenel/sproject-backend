import { Injectable } from '@nestjs/common'
import { CreateBlogDto } from './dto/create-blog.dto'
import { UpdateBlogDto } from './dto/update-blog.dto'
import { EntityManager, Repository } from 'typeorm'
import { Blog } from './entities/blog.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class BlogService {
  constructor(@InjectRepository(Blog) private readonly itemRepository: Repository<Blog>, private readonly entityManager: EntityManager) {
    }

  async create(createBlogDto: CreateBlogDto) {
    const blogPost = new Blog(createBlogDto)
    return this.entityManager.save(blogPost)
  }

  async findAll() {
    return this.itemRepository.find()
  }

  async findOne(id: number) {
    return this.itemRepository.findOneBy({ id })
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const blogPost = await this.itemRepository.findOneBy({ id })
    blogPost.body = updateBlogDto.body
    blogPost.name = updateBlogDto.name
    blogPost.updated_at = new Date().toISOString()
    await this.entityManager.save(blogPost)
  }

  async remove(id: number) {
    await this.itemRepository.delete(+id)
  }
}
