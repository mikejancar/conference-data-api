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
const common_1 = require("@nestjs/common");
const fs = require("fs");
let ConferenceDataService = class ConferenceDataService {
    constructor() {
        fs.readFile('.\\data\\session-data.json', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                this.conferenceData = [
                    {
                        id: 0,
                        name: 'Conference data failed to load',
                        sessions: [],
                    },
                ];
                return;
            }
            const parsedData = JSON.parse(data);
            this.conferenceData = parsedData.conferences;
        });
    }
    getAllConferences() {
        return this.conferenceData;
    }
    getConference(id) {
        return this.conferenceData.find((conf) => conf.id === id);
    }
};
ConferenceDataService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConferenceDataService);
exports.ConferenceDataService = ConferenceDataService;
//# sourceMappingURL=conference-data.service.js.map