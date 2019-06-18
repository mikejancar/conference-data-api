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
const common_1 = require("@nestjs/common");
const conference_data_service_1 = require("../../services/conference-data/conference-data.service");
let ConferencesController = class ConferencesController {
    constructor(conferenceDataService) {
        this.conferenceDataService = conferenceDataService;
    }
    getAllConferences() {
        return this.conferenceDataService.getAllConferences();
    }
    getConference(params) {
        return this.conferenceDataService.getConference(parseInt(params.id, 10));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ConferencesController.prototype, "getAllConferences", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ConferencesController.prototype, "getConference", null);
ConferencesController = __decorate([
    common_1.Controller('conferences'),
    __metadata("design:paramtypes", [conference_data_service_1.ConferenceDataService])
], ConferencesController);
exports.ConferencesController = ConferencesController;
//# sourceMappingURL=conferences.controller.js.map