// import { Injectable } from "@nestjs/common";
// import { eq, getTableColumns } from "drizzle-orm";
// import { NodePgDatabase } from "drizzle-orm/node-postgres";
// import { PgTableWithColumns } from "drizzle-orm/pg-core";
// import { ObjectLiteral, Repository } from "typeorm";

// @Injectable()
// export class TRelationCrudService<T extends ObjectLiteral, U extends ObjectLiteral, V extends ObjectLiteral> {
//     constructor(
//         private readonly repository: Repository<T>,
//         private readonly firstRepository: Repository<U>,
//         private readonly secondRepository: Repository<V>,
//         private readonly repositoryName: string,
//         private readonly firstFieldName: string,
//         private readonly secondFieldName: string
//     ) {
//     }
//     async givenFirst(firstId: string) {
//         try {
//             const result = await this.secondRepository.find({
//                 where: {
//                     [this.repositoryName]: {
//                         [this.firstFieldName]: firstId
//                     }
//                 } as any
//             });

//             return {
//                 count: result.length,
//                 items: result
//             }
//         } catch (error) {
//             console.error('Error in givenFirst:', error);
//             throw error;
//         }
//     }

//     async givenSecond(secondId: string) {
//         try {

//             const result = await this.firstRepository.find({
//                 where: {
//                     [this.repositoryName]: {
//                         [this.secondFieldName]: secondId
//                     }
//                 } as any
//             });

//             return {
//                 count: result.length,
//                 items: result
//             }
//         } catch (error) {
//             console.error('Error in givenSecond:', error);
//             throw error;
//         }
//     }

//     async assignFirstsForSecond(secondId: string, firstIds: string[]) {
//         try {
//             const itemData = this.repository.create(firstIds.map((firstId) => ({ [this.firstFieldName]: firstId, [this.secondFieldName]: secondId })) as any);
//             await this.repository.insert(itemData);

//             return {
//                 count: itemData.length,
//                 items: itemData
//             }
//         } catch (error) {
//             console.error('Error in assignSecond:', error);
//             throw error;
//         }
//     }

//     async assignSecondsForFirst(firstId: string, secondsIds: string[]) {
//         try {
//             const itemData = this.repository.create(secondsIds.map((secondId) => ({ [this.firstFieldName]: firstId, [this.secondFieldName]: secondId })) as any);
//             await this.repository.insert(itemData);

//             return {
//                 count: itemData.length,
//                 items: itemData
//             }
//         } catch (error) {
//             console.error('Error in assignFirst:', error);
//             throw error;
//         }
//     }

// }
