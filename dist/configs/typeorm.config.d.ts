import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NamingStrategyInterface } from 'typeorm';
export declare const typeormConfig: ({ postgresUri, env, autoLoadEntities, namingStrategy, postgresCertificate, }: {
    postgresUri: string;
    env: string;
    autoLoadEntities: boolean;
    namingStrategy: NamingStrategyInterface;
    postgresCertificate?: string;
}) => TypeOrmModuleOptions | Promise<TypeOrmModuleOptions>;
