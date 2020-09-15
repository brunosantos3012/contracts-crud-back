"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const jwt_auth_guard_1 = require("./../auth/jwt/jwt-auth.guard");
const client_service_1 = require("./service/client.service");
const client_dto_1 = require("./dto/client.dto");
const common_1 = require("@nestjs/common");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async insertClient(request) {
        const client = await this.clientService.insert(request);
        if (client) {
            return client.code;
        }
        throw new common_1.InternalServerErrorException('Não foi possível cadastrar o cliente.');
    }
    async getAll(query) {
        const clients = await this.clientService.getAll(query);
        if (!clients.length) {
            throw new common_1.NotFoundException('Nenhum cliente encontrado.');
        }
        return clients;
    }
    async getSingle(clientCode) {
        const client = await this.clientService.getSingle(clientCode);
        if (!client) {
            throw new common_1.NotFoundException('Cliente não encontrado.');
        }
        return client;
    }
    async update(clientCode, request) {
        const result = await this.clientService.update(clientCode, request);
        if (!result.affected) {
            throw new common_1.NotFoundException('Cliente não encontrado.');
        }
    }
    async delete(clientCode) {
        const result = await this.clientService.delete(clientCode);
        if (!result.affected) {
            throw new common_1.NotFoundException('Cliente não encontrado.');
        }
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_dto_1.ClientDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "insertClient", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_dto_1.ClientDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getSingle", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Patch(':code'),
    common_1.HttpCode(204),
    __param(0, common_1.Param('code')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, client_dto_1.ClientDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "update", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Delete(':code'),
    common_1.HttpCode(204),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "delete", null);
ClientController = __decorate([
    common_1.Controller('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map