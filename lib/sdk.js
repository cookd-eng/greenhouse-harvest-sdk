"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const gh_applications_1 = require("./gh_applications");
const gh_custom_fields_1 = require("./gh_custom_fields");
const gh_candidates_1 = require("./gh_candidates");
const gh_job_posts_1 = require("./gh_job_posts");
const gh_jobs_1 = require("./gh_jobs");
class GreenhouseHarvestSDK {
    // Add other API properties as needed
    constructor(apiKey, baseURL = "https://harvest.greenhouse.io") {
        const credential = Buffer.from(apiKey + ":").toString("base64");
        this.client = axios_1.default.create({
            baseURL,
            headers: {
                Authorization: `Basic ${credential}`,
                "Content-Type": "application/json",
            },
        });
        this.applications = new gh_applications_1.HarvestApplicationsApi(this.client);
        this.customFields = new gh_custom_fields_1.HarvestCustomFieldsApi(this.client);
        this.candidates = new gh_candidates_1.HarvestCandidatesApi(this.client);
        this.jobs = new gh_jobs_1.HarvestJobsApi(this.client);
        this.jobPosts = new gh_job_posts_1.HarvestJobPostsApi(this.client);
    }
}
exports.default = GreenhouseHarvestSDK;
