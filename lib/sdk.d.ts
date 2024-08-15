import { HarvestApplicationsApi } from "./gh_applications";
import { HarvestCustomFieldsApi } from "./gh_custom_fields";
import { HarvestCandidatesApi } from "./gh_candidates";
import { HarvestJobPostsApi } from "./gh_job_posts";
import { HarvestJobsApi } from "./gh_jobs";
declare class GreenhouseHarvestSDK {
    private client;
    applications: HarvestApplicationsApi;
    customFields: HarvestCustomFieldsApi;
    candidates: HarvestCandidatesApi;
    jobs: HarvestJobsApi;
    jobPosts: HarvestJobPostsApi;
    constructor(apiKey: string, baseURL?: string);
}
export default GreenhouseHarvestSDK;
