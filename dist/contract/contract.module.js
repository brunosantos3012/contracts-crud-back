"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractModule = void 0;
const client_entity_1 = require("./../client/entity/client.entity");
const contract_service_1 = require("./service/contract.service");
const contract_entity_1 = require("./entity/contract.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const contract_controller_1 = require("./contract.controller");
let ContractModule = class ContractModule {
};
ContractModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([contract_entity_1.ContractEntity, client_entity_1.ClientEntity])],
        controllers: [contract_controller_1.ContractController],
        providers: [contract_service_1.ContractService]
    })
], ContractModule);
exports.ContractModule = ContractModule;
//# sourceMappingURL=contract.module.js.map