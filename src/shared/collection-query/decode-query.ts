import { BadRequestException } from "@nestjs/common";
import { CollectionQuery } from "./collection-query";

export function decodeCollectionQuery(q: string): CollectionQuery{
    if (!q) return {
      // throw  new BadRequestException('Search query cannot be empty')
    }; // Return an empty object if no query is provided
  
    try {
      const decoded = decodeURIComponent(q); // Decode the URL-encoded string
      return JSON.parse(decoded); // Parse the JSON string into an object
    } catch (error) {
      console.error("Error decoding query:", error);
      return {}; // Return an empty object on error
    }
  }
  