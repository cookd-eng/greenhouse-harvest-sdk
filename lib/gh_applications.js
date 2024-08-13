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
exports.HarvestApplicationsApi = void 0;
const base_api_1 = require("./base_api");
class HarvestApplicationsApi extends base_api_1.BaseGreenhouseHarvestSDK {
    /**
     * List all applications
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param params - Query parameters for listing applications
     * @returns Promise with the response containing an array of Application objects
     */
    listApplications(onBehalfOf, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "GET",
                url: "/v1/applications",
                params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Retrieve an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to retrieve
     * @returns Promise with the response containing the Application object
     */
    getApplication(onBehalfOf, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "GET",
                url: `/v1/applications/${id}`,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Delete an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to delete
     * @returns Promise with the response containing a success message
     */
    deleteApplication(onBehalfOf, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "DELETE",
                url: `/v1/applications/${id}`,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Add an application to a candidate
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param candidateId - The ID of the candidate
     * @param params - Parameters for adding the application
     * @returns Promise with the response containing the new Application object
     */
    addApplication(onBehalfOf, candidateId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/candidates/${candidateId}/applications`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Update an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to update
     * @param params - Parameters for updating the application
     * @returns Promise with the response containing the updated Application object
     */
    updateApplication(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PATCH",
                url: `/v1/applications/${id}`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Advance an application to the next stage
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to advance
     * @param params - Parameters for advancing the application
     * @returns Promise with the response containing the updated Application object
     */
    advanceApplication(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/applications/${id}/advance`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Move an application to a different stage (same job)
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to move
     * @param params - Parameters for moving the application
     * @returns Promise with the response containing the updated Application object
     */
    moveApplication(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/applications/${id}/move`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Transfer an application to a different job
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to transfer
     * @param params - Parameters for transferring the application
     * @returns Promise with the response containing the updated Application object
     */
    transferApplication(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/applications/${id}/transfer_to_job`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Convert a prospect application to a candidate application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the prospect application to convert
     * @param params - Parameters for converting the prospect
     * @returns Promise with the response containing the conversion result
     */
    convertProspect(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PATCH",
                url: `/v1/applications/${id}/convert_prospect`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Add an attachment to an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application
     * @param params - Parameters for adding the attachment
     * @returns Promise with the response containing the attachment details
     */
    addAttachment(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/applications/${id}/attachments`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Hire an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to hire
     * @param params - Parameters for hiring the application
     * @returns Promise with the response containing the updated Application object
     */
    hireApplication(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/applications/${id}/hire`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Reject an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to reject
     * @param params - Parameters for rejecting the application
     * @returns Promise with the response containing the updated Application object
     */
    rejectApplication(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/applications/${id}/reject`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Update the rejection reason for a rejected application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the rejected application
     * @param params - Parameters for updating the rejection reason
     * @returns Promise with the response containing the update result
     */
    updateRejectionReason(onBehalfOf, id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PATCH",
                url: `/v1/applications/${id}/reject`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Unreject an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to unreject
     * @returns Promise with the response containing the updated Application object
     */
    unrejectApplication(onBehalfOf, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/applications/${id}/unreject`,
                data: {},
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
}
exports.HarvestApplicationsApi = HarvestApplicationsApi;
