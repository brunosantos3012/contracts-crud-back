"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginEntity = void 0;
var typeorm_1 = require("typeorm");
var LoginEntity = /** @class */ (function () {
    function LoginEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: 'cod_usuario' })
    ], LoginEntity.prototype, "code");
    __decorate([
        typeorm_1.Column({ name: 'nome' })
    ], LoginEntity.prototype, "name");
    __decorate([
        typeorm_1.Column({ name: 'email' })
    ], LoginEntity.prototype, "email");
    __decorate([
        typeorm_1.Column({ name: 'senha' })
    ], LoginEntity.prototype, "password");
    LoginEntity = __decorate([
        typeorm_1.Entity({ name: 'usuario' })
    ], LoginEntity);
    return LoginEntity;
}());
exports.LoginEntity = LoginEntity;
