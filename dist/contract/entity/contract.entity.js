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
exports.ContractEntity = void 0;
const client_entity_1 = require("./../../client/entity/client.entity");
const typeorm_1 = require("typeorm");
let ContractEntity = class ContractEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'code' }),
    __metadata("design:type", Number)
], ContractEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ name: 'description' }),
    __metadata("design:type", String)
], ContractEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'value' }),
    __metadata("design:type", Number)
], ContractEntity.prototype, "value", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_entity_1.ClientEntity, client => client.code),
    typeorm_1.JoinColumn({ name: 'client' }),
    __metadata("design:type", Object)
], ContractEntity.prototype, "client", void 0);
ContractEntity = __decorate([
    typeorm_1.Entity('contract')
], ContractEntity);
exports.ContractEntity = ContractEntity;
//# sourceMappingURL=contract.entity.js.map