"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarvestCandidatesApi = void 0;
const base_api_1 = require("./base_api");
class HarvestCandidatesApi extends base_api_1.BaseGreenhouseHarvestSDK {
    listCandidates(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "GET",
                url: "/v1/candidates",
                params,
            });
        });
    }
    getCandidate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "GET",
                url: `/v1/candidates/${id}`,
            });
        });
    }
    deleteCandidate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "DELETE",
                url: `/v1/candidates/${id}`,
            });
        });
    }
    updateCandidate(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PATCH",
                url: `/v1/candidates/${id}`,
                data: params,
            });
        });
    }
    addCandidate(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: "/v1/candidates",
                data: params,
            });
        });
    }
    addNote(candidateId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/candidates/${candidateId}/activity_feed/notes`,
                data: params,
            });
        });
    }
    addEmailNote(candidateId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/candidates/${candidateId}/activity_feed/emails`,
                data: params,
            });
        });
    }
    addEducation(candidateId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/candidates/${candidateId}/educations`,
                data: params,
            });
        });
    }
    deleteEducation(candidateId, educationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "DELETE",
                url: `/v1/candidates/${candidateId}/educations/${educationId}`,
            });
        });
    }
    addEmployment(candidateId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/candidates/${candidateId}/employments`,
                data: params,
            });
        });
    }
    deleteEmployment(candidateId, employmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "DELETE",
                url: `/v1/candidates/${candidateId}/employments/${employmentId}`,
            });
        });
    }
    addAttachment(candidateId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/candidates/${candidateId}/attachments`,
                data: params,
            });
        });
    }
    anonymizeCandidate(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PUT",
                url: `/v1/candidates/${id}/anonymize`,
                params,
            });
        });
    }
    mergeCandidates(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PUT",
                url: "/v1/candidates/merge",
                data: params,
            });
        });
    }
    static getCandidateProfileUrl(candidateId) {
        return `https://app7.greenhouse.io/people/${candidateId}`;
    }
}
exports.HarvestCandidatesApi = HarvestCandidatesApi;
