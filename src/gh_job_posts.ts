import { BaseGreenhouseHarvestSDK } from "./base_api";

// Interfaces for job post related objects
interface JobPostLocation {
  id: number;
  name: string;
  office_id: number | null;
  job_post_custom_location_id: number | null;
  job_post_location_type: {
    id: number;
    name: string;
  };
}

interface JobPostQuestion {
  required: boolean;
  private: boolean;
  label: string;
  name: string;
  type: string;
  values: Array<{
    value: number;
    label: string;
  }>;
  description: string | null;
}

interface JobPost {
  id: number;
  title: string;
  location: JobPostLocation;
  internal: boolean;
  external: boolean;
  active: boolean;
  live: boolean;
  first_published_at: string;
  job_id: number;
  content: string;
  internal_content: string;
  updated_at: string;
  created_at: string;
  demographic_question_set_id: number;
  questions: JobPostQuestion[];
}

interface CustomLocation {
  id: number;
  value: string;
  active: boolean;
  greenhouse_job_board_id: number;
  created_at: string;
  updated_at: string;
}

// Interfaces for request parameters
interface ListJobPostsParams {
  per_page?: number;
  page?: number;
  skip_count?: boolean;
  created_before?: string;
  created_after?: string;
  updated_before?: string;
  updated_after?: string;
  live?: boolean;
  active?: boolean;
  full_content?: boolean;
  internal?: boolean;
}

interface UpdateJobPostParams {
  title?: string;
  location?: string;
  'location.office_id'?: number;
  'location.custom_location_id'?: number;
  content?: string;
}

interface UpdateJobPostStatusParams {
  status: 'live' | 'offline';
}

export class HarvestJobPostsApi extends BaseGreenhouseHarvestSDK {
  /**
   * List all of an organization's job posts
   * @param params - Query parameters for listing job posts
   * @returns Promise with the response containing an array of JobPost objects
   */
  async listJobPosts(params?: ListJobPostsParams): Promise<JobPost[]> {
    return this.request({
      method: 'GET',
      url: '/v1/job_posts',
      params
    });
  }

  /**
   * Retrieve a single job post
   * @param id - The ID of the job post to retrieve
   * @param fullContent - If true, returns the full content of the job post
   * @returns Promise with the response containing a JobPost object
   */
  async getJobPost(id: number, fullContent?: boolean): Promise<JobPost> {
    return this.request({
      method: 'GET',
      url: `/v1/job_posts/${id}`,
      params: { full_content: fullContent }
    });
  }

  /**
   * List all job posts for a given job
   * @param jobId - The ID of the job
   * @param active - If true, only return active job posts
   * @param fullContent - If true, returns the full content of the job posts
   * @returns Promise with the response containing an array of JobPost objects
   */
  async listJobPostsForJob(jobId: number, active?: boolean, fullContent?: boolean): Promise<JobPost[]> {
    return this.request({
      method: 'GET',
      url: `/v1/jobs/${jobId}/job_posts`,
      params: { active, full_content: fullContent }
    });
  }

  /**
   * Retrieve the job post for a given job (deprecated)
   * @param jobId - The ID of the job
   * @param params - Query parameters for retrieving the job post
   * @returns Promise with the response containing a JobPost object
   */
  async getJobPostForJob(jobId: number, params?: { content?: boolean; questions?: boolean; full_content?: boolean }): Promise<JobPost> {
    return this.request({
      method: 'GET',
      url: `/v1/jobs/${jobId}/job_post`,
      params
    });
  }

  /**
   * Retrieve custom locations for a job post
   * @param jobPostId - The ID of the job post
   * @returns Promise with the response containing an array of CustomLocation objects
   */
  async getCustomLocationsForJobPost(jobPostId: number): Promise<CustomLocation[]> {
    return this.request({
      method: 'GET',
      url: `/v1/job_posts/${jobPostId}/custom_locations`
    });
  }

  /**
   * Update a job post
   * @param id - The ID of the job post to update
   * @param params - Parameters for updating the job post
   * @param onBehalfOf - ID of the user issuing this request
   * @returns Promise with the response containing a success message
   */
  async updateJobPost(id: number, params: UpdateJobPostParams, onBehalfOf: number): Promise<{ success: boolean }> {
    return this.request({
      method: 'PATCH',
      url: `/v2/job_posts/${id}`,
      data: params,
      headers: { 'On-Behalf-Of': onBehalfOf.toString() }
    });
  }

  /**
   * Update the status of a job post
   * @param id - The ID of the job post to update
   * @param params - Parameters for updating the job post status
   * @param onBehalfOf - ID of the user issuing this request
   * @returns Promise with the response containing a success message
   */
  async updateJobPostStatus(id: number, params: UpdateJobPostStatusParams, onBehalfOf: number): Promise<{ success: boolean }> {
    return this.request({
      method: 'PATCH',
      url: `/v2/job_posts/${id}/status`,
      data: params,
      headers: { 'On-Behalf-Of': onBehalfOf.toString() }
    });
  }
}
