"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeNamingStrategy = void 0;
const typeorm_1 = require("typeorm");
const StringUtils_1 = require("typeorm/util/StringUtils");
class SnakeNamingStrategy extends typeorm_1.DefaultNamingStrategy {
    tableName(targetName, userSpecifiedName) {
        return userSpecifiedName || (0, StringUtils_1.snakeCase)(targetName);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return (0, StringUtils_1.snakeCase)(embeddedPrefixes.concat(customName || propertyName).join('_'));
    }
    relationName(propertyName) {
        return (0, StringUtils_1.snakeCase)(propertyName);
    }
}
exports.SnakeNamingStrategy = SnakeNamingStrategy;
//# sourceMappingURL=typeorm-snake-naming.strategy.js.map