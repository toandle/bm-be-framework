"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationPayload = void 0;
class PaginationPayload {
    constructor(pagination, totalItems) {
        this.pageNumber = Number(pagination.pageNumber) || 1;
        this.pageSize = Number(pagination.pageSize) || 10;
        this.totalItems = totalItems;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }
}
exports.PaginationPayload = PaginationPayload;
//# sourceMappingURL=pagination.payload.js.map