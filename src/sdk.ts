import axios, { AxiosInstance } from "axios";
import { HarvestApplicationsApi } from "./gh_applications";
import { HarvestCustomFieldsApi } from "./gh_custom_fields";
import { HarvestCandidatesApi } from "./gh_candidates";
import { HarvestJobPostsApi } from "./gh_job_posts";
import { HarvestJobsApi } from "./gh_jobs";

class GreenhouseHarvestSDK {
  private client: AxiosInstance;
  public applications: HarvestApplicationsApi;
  public customFields: HarvestCustomFieldsApi;
  public candidates: HarvestCandidatesApi;
  public jobs: HarvestJobsApi;
  public jobPosts: HarvestJobPostsApi;
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
    this.jobs = new HarvestJobsApi(this.client);
    this.jobPosts = new HarvestJobPostsApi(this.client);
  }
}

export default GreenhouseHarvestSDK;
