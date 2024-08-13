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
exports.HarvestCustomFieldsApi = void 0;
const base_api_1 = require("./base_api");
class HarvestCustomFieldsApi extends base_api_1.BaseGreenhouseHarvestSDK {
    /**
     * List Custom Fields
     * @param fieldType The type of custom fields to retrieve
     * @param params Optional parameters for the request
     * @param onBehalfOf The user to make the request on behalf of
     */
    listCustomFields(fieldType, onBehalfOf, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "GET",
                url: `/v1/custom_fields/${fieldType}`,
                params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Retrieve a Custom Field
     * @param id The ID of the custom field to retrieve
     * @param onBehalfOf The user to make the request on behalf of
     */
    getCustomField(id, onBehalfOf) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "GET",
                url: `/v1/custom_field/${id}`,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Create a Custom Field
     * @param params The parameters for creating a custom field
     * @param onBehalfOf The user to make the request on behalf of
     */
    createCustomField(params, onBehalfOf) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: "/v1/custom_fields",
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Update a Custom Field
     * @param id The ID of the custom field to update
     * @param params The parameters for updating a custom field
     * @param onBehalfOf The user to make the request on behalf of
     */
    updateCustomField(id, params, onBehalfOf) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PATCH",
                url: `/v1/custom_fields/${id}`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Delete a Custom Field
     * @param id The ID of the custom field to delete
     * @param onBehalfOf The user to make the request on behalf of
     */
    deleteCustomField(id, onBehalfOf) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "DELETE",
                url: `/v1/custom_fields/${id}`,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * List Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param type The type of options to retrieve (all, active, or inactive)
     * @param onBehalfOf The user to make the request on behalf of
     */
    listCustomFieldOptions(customFieldId_1) {
        return __awaiter(this, arguments, void 0, function* (customFieldId, type = "active", onBehalfOf) {
            return this.request({
                method: "GET",
                url: `/v1/custom_field/${customFieldId}/custom_field_options`,
                params: { type },
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Create Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param params The parameters for creating custom field options
     * @param onBehalfOf The user to make the request on behalf of
     */
    createCustomFieldOptions(customFieldId, params, onBehalfOf) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "POST",
                url: `/v1/custom_field/${customFieldId}/custom_field_options`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Update Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param params The parameters for updating custom field options
     * @param onBehalfOf The user to make the request on behalf of
     */
    updateCustomFieldOptions(customFieldId, params, onBehalfOf) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "PATCH",
                url: `/v1/custom_field/${customFieldId}/custom_field_options`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
    /**
     * Remove Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param params The parameters for removing custom field options
     * @param onBehalfOf The user to make the request on behalf of
     */
    removeCustomFieldOptions(customFieldId, params, onBehalfOf) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({
                method: "DELETE",
                url: `/v1/custom_field/${customFieldId}/custom_field_options`,
                data: params,
                headers: { "On-Behalf-Of": onBehalfOf },
            });
        });
    }
}
exports.HarvestCustomFieldsApi = HarvestCustomFieldsApi;
