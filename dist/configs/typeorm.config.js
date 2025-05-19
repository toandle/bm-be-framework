"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
const strategies_1 = require("../commons/strategies");
const typeormConfig = ({ postgresUri, env = 'development', autoLoadEntities = true, namingStrategy = new strategies_1.SnakeNamingStrategy(), postgresCertificate, }) => {
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
    }
    else {
        throw Error('Typeorm configuration is not valid.');
    }
};
exports.typeormConfig = typeormConfig;
//# sourceMappingURL=typeorm.config.js.map