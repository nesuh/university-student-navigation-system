export type EntityCrudOptions = {
  createDto?: { new (): NonNullable<unknown> };
  updateDto?: { new (): NonNullable<unknown> };
};

export type ExtraCrudOptions = {
  createDto?: { new (): NonNullable<unknown> };
  updateDto?: { new (): NonNullable<unknown> };
};
