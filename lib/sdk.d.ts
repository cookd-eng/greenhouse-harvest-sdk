import { HarvestApplicationsApi } from "./gh_applications";
import { HarvestCustomFieldsApi } from "./gh_custom_fields";
import { HarvestCandidatesApi } from "./gh_candidates";
declare class GreenhouseHarvestSDK {
    private client;
    applications: HarvestApplicationsApi;
    customFields: HarvestCustomFieldsApi;
    candidates: HarvestCandidatesApi;
    constructor(apiKey: string, baseURL?: string);
}
export default GreenhouseHarvestSDK;
