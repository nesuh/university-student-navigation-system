export type EntityCrudOptions = {
  createDto?: { new (): NonNullable<unknown> };
  updateDto?: { new (): NonNullable<unknown> };
};

export type ExtraCrudOptions = {
  entityIdName: string;
  createDto?: { new (): NonNullable<unknown> };
  updateDto?: { new (): NonNullable<unknown> };
};

