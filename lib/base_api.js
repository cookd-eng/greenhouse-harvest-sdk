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
exports.BaseGreenhouseHarvestSDK = void 0;
const axios_1 = require("axios");
class BaseGreenhouseHarvestSDK {
    constructor(client) {
        this.client = client;
    }
    request(config) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const response = yield this.client(config);
                console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
                return response.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    console.error("API request failed:", JSON.stringify({
                        status: (_a = error.response) === null || _a === void 0 ? void 0 : _a.status,
                        statusText: (_b = error.response) === null || _b === void 0 ? void 0 : _b.statusText,
                        data: (_c = error.response) === null || _c === void 0 ? void 0 : _c.data,
                    }, null, 2));
                    throw new Error(`API request failed: ${(_d = error.response) === null || _d === void 0 ? void 0 : _d.status} ${(_e = error.response) === null || _e === void 0 ? void 0 : _e.statusText}`);
                }
                console.error("Unexpected error:", error);
                throw error;
            }
        });
    }
}
exports.BaseGreenhouseHarvestSDK = BaseGreenhouseHarvestSDK;
