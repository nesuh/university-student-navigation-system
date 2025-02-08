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
exports.UpdateBuildingDto = exports.CreateBuildingDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var enums_1 = require("src/shared/enums");
var CreateBuildingDto = /** @class */ (function () {
    function CreateBuildingDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ description: 'Name of the building' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateBuildingDto.prototype, "name");
    __decorate([
        swagger_1.ApiProperty({
            description: 'Building type',
            "enum": enums_1.BuildingType,
            enumName: 'BuildingType'
        }),
        class_validator_1.IsEnum(enums_1.BuildingType)
    ], CreateBuildingDto.prototype, "type");
    __decorate([
        swagger_1.ApiProperty({ description: 'Latitude of the building' }),
        class_validator_1.IsDecimal()
    ], CreateBuildingDto.prototype, "latitude");
    __decorate([
        swagger_1.ApiProperty({ description: 'Longitude of the building' }),
        class_validator_1.IsDecimal()
    ], CreateBuildingDto.prototype, "longitude");
    __decorate([
        swagger_1.ApiProperty({ description: 'Description of the building' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateBuildingDto.prototype, "description");
    return CreateBuildingDto;
}());
exports.CreateBuildingDto = CreateBuildingDto;
var UpdateBuildingDto = /** @class */ (function (_super) {
    __extends(UpdateBuildingDto, _super);
    function UpdateBuildingDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ description: 'ID of the building' }),
        class_validator_1.IsUUID()
    ], UpdateBuildingDto.prototype, "id");
    return UpdateBuildingDto;
}(CreateBuildingDto));
exports.UpdateBuildingDto = UpdateBuildingDto;
