import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NamingStrategyInterface } from 'typeorm';
import { SnakeNamingStrategy } from '../commons/strategies';

export const typeormConfig = ({
    postgresUri,
    env = 'development',
    autoLoadEntities = true,
    namingStrategy = new SnakeNamingStrategy(),
    postgresCertificate,
}: {
    postgresUri: string;
    env: string;
    autoLoadEntities: boolean;
    namingStrategy: NamingStrategyInterface;
    postgresCertificate?: string;
}): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> => {
    if (postgresUri) {
        return {
            type: 'postgres',
            url: postgresUri,
            synchronize: env !== 'production',
            autoLoadEntities: autoLoadEntities,
            namingStrategy,
            ssl: !postgresCertificate
                ? false
                : {
                      rejectUnauthorized: true,
                      ca: postgresCertificate,
                  },
        };
    } else {
        throw Error('Typeorm configuration is not valid.');
    }
};
