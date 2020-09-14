"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var situation_entity_1 = require("../../core/entity/situation.entity");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: 'cod_usuario' })
    ], UserEntity.prototype, "code");
    __decorate([
        typeorm_1.Column({ name: 'nome' })
    ], UserEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ name: 'senha' })
    ], UserEntity.prototype, "password");
    __decorate([
        typeorm_1.Column({ name: 'email' })
    ], UserEntity.prototype, "email");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return situation_entity_1.SituationEntity; }, function (situation) { return situation.code; }, { onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn({ name: 'situacao' })
    ], UserEntity.prototype, "situation");
    UserEntity = __decorate([
        typeorm_1.Entity({ name: 'usuario' })
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
