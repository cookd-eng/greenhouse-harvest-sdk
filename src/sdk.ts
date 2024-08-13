import axios, { AxiosInstance } from "axios";
import { HarvestApplicationsApi } from "./gh_applications";
import { HarvestCustomFieldsApi } from "./gh_custom_fields";
import { HarvestCandidatesApi } from "./gh_candidates";

class GreenhouseHarvestSDK {
  private client: AxiosInstance;
  public applications: HarvestApplicationsApi;
  public customFields: HarvestCustomFieldsApi;
  public candidates: HarvestCandidatesApi;
  // Add other API properties as needed

  constructor(
    apiKey: string,
    baseURL: string = "https://harvest.greenhouse.io",
  ) {
    const credential = Buffer.from(apiKey + ":").toString("base64");

    this.client = axios.create({
      baseURL,
      headers: {
        Authorization: `Basic ${credential}`,
        "Content-Type": "application/json",
      },
    });

    this.applications = new HarvestApplicationsApi(this.client);
    this.customFields = new HarvestCustomFieldsApi(this.client);
    this.candidates = new HarvestCandidatesApi(this.client);
  }
}

export default GreenhouseHarvestSDK;
