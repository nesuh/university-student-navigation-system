"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateRegistrationDto = exports.CreateRegistrationDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateRegistrationDto = /** @class */ (function () {
    function CreateRegistrationDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ description: 'Name of the registration' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateRegistrationDto.prototype, "name");
    __decorate([
        swagger_1.ApiProperty({ description: 'email of registration' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateRegistrationDto.prototype, "email");
    __decorate([
        swagger_1.ApiProperty({ description: 'Phone Number of registration' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateRegistrationDto.prototype, "phoneNumber");
    __decorate([
        swagger_1.ApiProperty({
            description: 'ID of the building the registration is associated with'
        }),
        class_validator_1.IsUUID()
    ], CreateRegistrationDto.prototype, "buildingId");
    __decorate([
        swagger_1.ApiProperty({ description: 'Operational time of the registration' }),
        class_validator_1.IsNotEmpty()
    ], CreateRegistrationDto.prototype, "operationalTime");
    __decorate([
        swagger_1.ApiProperty({
            description: 'Registrar or HeadOfDepartment  of the field associated with the registration'
        }),
        class_validator_1.IsString()
    ], CreateRegistrationDto.prototype, "role");
    return CreateRegistrationDto;
}());
exports.CreateRegistrationDto = CreateRegistrationDto;
var UpdateRegistrationDto = /** @class */ (function (_super) {
    __extends(UpdateRegistrationDto, _super);
    function UpdateRegistrationDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ description: 'ID of the registration' }),
        class_validator_1.IsUUID()
    ], UpdateRegistrationDto.prototype, "id");
    return UpdateRegistrationDto;
}(CreateRegistrationDto));
exports.UpdateRegistrationDto = UpdateRegistrationDto;
