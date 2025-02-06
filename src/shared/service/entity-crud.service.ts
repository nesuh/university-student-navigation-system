/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class TEntityCrudService<T extends ObjectLiteral> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll() {
    const data = await this.repository.find();
    return {
      count: data.length,
      items: data,
    };
  }
  async findOne(id: any): Promise<T | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async create(itemData: any) {
    const items = this.repository.create(itemData);
    await this.repository.insert(items);
    return items;
  }

  async update(id: string, itemData: any) {
    return await this.repository.update(id, itemData);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}
