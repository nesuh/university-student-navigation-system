export class CollectionQuery {
    filter?: Record<string, any>; // Object for dynamic filters
    sort?: string; // Sorting field (e.g., "name:asc")
    page?: number = 1; // Default page 1
    limit?: number = 10; // Default limit 10
    count?: boolean = false; // Whether to return count only
  }
  