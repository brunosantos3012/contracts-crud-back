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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
const contract_entity_1 = require("./../../contract/entity/contract.entity");
const typeorm_1 = require("typeorm");
let ClientEntity = class ClientEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'code' }),
    __metadata("design:type", Number)
], ClientEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ name: 'name' }),
    __metadata("design:type", String)
], ClientEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'cpf' }),
    __metadata("design:type", String)
], ClientEntity.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column({ name: 'phone' }),
    __metadata("design:type", String)
], ClientEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ name: 'email' }),
    __metadata("design:type", String)
], ClientEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.OneToMany(type => contract_entity_1.ContractEntity, contract => contract.client),
    __metadata("design:type", Array)
], ClientEntity.prototype, "contract", void 0);
ClientEntity = __decorate([
    typeorm_1.Entity('client')
], ClientEntity);
exports.ClientEntity = ClientEntity;
//# sourceMappingURL=client.entity.js.map