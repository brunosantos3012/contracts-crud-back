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
exports.ContractController = void 0;
const jwt_auth_guard_1 = require("./../auth/jwt/jwt-auth.guard");
const contract_dto_1 = require("./dto/contract.dto");
const contract_service_1 = require("./service/contract.service");
const common_1 = require("@nestjs/common");
let ContractController = class ContractController {
    constructor(contractService) {
        this.contractService = contractService;
    }
    async insert(request) {
        const contract = await this.contractService.insert(request);
        if (contract) {
            return contract.code;
        }
        throw new common_1.InternalServerErrorException('Não foi possível cadastrar o contrato.');
    }
    async getSingle(contractCode) {
        const contract = await this.contractService.getSingle(contractCode);
        if (!contract) {
            throw new common_1.NotFoundException('Contrato não encontrado.');
        }
        return contract;
    }
    async getAll() {
        const contracts = await this.contractService.getAll();
        if (!contracts.length) {
            throw new common_1.NotFoundException('Nenhum contrato encontrado.');
        }
        return contracts;
    }
    async update(contractCode, request) {
        const result = await this.contractService.update(contractCode, request);
        if (!result.affected) {
            throw new common_1.NotFoundException('Contrato não encontrado.');
        }
    }
    async delete(code) {
        const result = await this.contractService.delete(code);
        if (!result.affected) {
            throw new common_1.NotFoundException('Contrato não encontrato.');
        }
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contract_dto_1.ContractDto]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "insert", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "getSingle", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Patch(':code'),
    common_1.HttpCode(204),
    __param(0, common_1.Param('code')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, contract_dto_1.ContractDto]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "update", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Delete(':code'),
    common_1.HttpCode(204),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "delete", null);
ContractController = __decorate([
    common_1.Controller('contract'),
    __metadata("design:paramtypes", [contract_service_1.ContractService])
], ContractController);
exports.ContractController = ContractController;
//# sourceMappingURL=contract.controller.js.map