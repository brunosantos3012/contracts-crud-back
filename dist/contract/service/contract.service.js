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
exports.ContractService = void 0;
const contract_entity_1 = require("./../entity/contract.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ContractService = class ContractService {
    constructor(contractRepository) {
        this.contractRepository = contractRepository;
    }
    insert(request) {
        return this.contractRepository.save(request);
    }
    getSingle(contractCode) {
        return this.contractRepository.findOne(contractCode, { relations: ['client'] });
    }
    getAll() {
        return this.contractRepository.find();
    }
    update(contractCode, request) {
        return this.contractRepository.update(contractCode, request);
    }
    delete(contractCode) {
        return this.contractRepository.delete(contractCode);
    }
};
ContractService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(contract_entity_1.ContractEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContractService);
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map