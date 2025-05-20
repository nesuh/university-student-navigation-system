/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class TExtraCrudService<T extends ObjectLiteral> {
  constructor(
    private readonly repository: Repository<T>,
    private readonly parentFieldName: string,
  ) {}

  async findAll(parentId: string) {
    const data = await this.repository.find({
      where: {
        [this.parentFieldName]: parentId,
      } as any,
    });
    return {
      count: data.length,
      items: data,
    };
  }

  async findOne(id: string): Promise<T | undefined> {
    return (
      (await this.repository.findOne({
        where: {
          id,
        } as any,
      })) || undefined
    );
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
