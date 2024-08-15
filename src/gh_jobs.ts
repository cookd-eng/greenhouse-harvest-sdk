import { BaseGreenhouseHarvestSDK } from "./base_api";

interface Department {
  id: number;
  name: string;
  parent_id: number | null;
  child_ids: number[];
  external_id: string | null;
}

interface Office {
  id: number;
  name: string;
  location: {
    name: string;
  };
  primary_contact_user_id: number | null;
  parent_id: number | null;
  child_ids: number[];
  external_id: string | null;
}

interface HiringTeamMember {
  id: number;
  first_name: string;
  last_name: string;
  name: string;
  employee_id: string | null;
}

interface Recruiter extends HiringTeamMember {
  responsible: boolean;
}

interface Opening {
  id: number;
  opening_id: string | null;
  status: 'open' | 'closed';
  opened_at: string;
  closed_at: string | null;
  application_id: number | null;
  close_reason: {
    id: number;
    name: string;
  } | null;
  custom_fields: Record<string, any>;
  keyed_custom_fields: Record<string, {
    name: string;
    type: string;
    value: any;
  }>;
}

interface Job {
  id: number;
  name: string;
  requisition_id: string | null;
  notes: string | null;
  confidential: boolean;
  status: 'open' | 'closed' | 'draft';
  created_at: string;
  opened_at: string | null;
  closed_at: string | null;
  updated_at: string;
  is_template: boolean;
  copied_from_id: number | null;
  departments: Department[];
  offices: Office[];
  custom_fields: Record<string, any>;
  keyed_custom_fields: Record<string, {
    name: string;
    type: string;
    value: any;
  }>;
  hiring_team: {
    hiring_managers: HiringTeamMember[];
    recruiters: Recruiter[];
    coordinators: Recruiter[];
    sourcers: HiringTeamMember[];
  };
  openings: Opening[];
}

interface ListJobsParams {
  per_page?: number;
  page?: number;
  skip_count?: boolean;
  created_before?: string;
  created_after?: string;
  updated_before?: string;
  updated_after?: string;
  requisition_id?: string;
  opening_id?: string;
  status?: 'open' | 'closed' | 'draft';
  department_id?: number;
  external_department_id?: string;
  office_id?: number;
  external_office_id?: string;
  custom_field_option_id?: number;
}

interface CreateJobParams {
  template_job_id: number;
  number_of_openings: number;
  job_post_name?: string;
  job_name?: string;
  department_id?: number;
  external_department_id?: string;
  office_ids?: number[];
  external_office_ids?: string[];
  requisition_id?: string;
  opening_ids?: string[];
}

interface UpdateJobParams {
  name?: string;
  notes?: string;
  anywhere?: boolean;
  requisition_id?: string;
  team_and_responsibilities?: string;
  how_to_sell_this_job?: string;
  custom_fields?: Array<{
    id?: number;
    name_key?: string;
    value?: any;
    min_value?: number;
    max_value?: number;
    unit?: string;
    delete_value?: string;
  }>;
  office_ids?: number[];
  external_office_ids?: string[];
  department_id?: number;
  external_department_id?: string;
}

interface HiringTeamMemberInput {
  user_id: number;
  responsible_for_future_candidates?: boolean;
  responsible_for_active_candidates?: boolean;
  responsible_for_inactive_candidates?: boolean;
}

interface UpdateHiringTeamParams {
  hiring_managers?: HiringTeamMemberInput[];
  sourcers?: HiringTeamMemberInput[];
  recruiters?: HiringTeamMemberInput[];
  coordinators?: HiringTeamMemberInput[];
}

interface RemoveHiringTeamParams {
  hiring_managers?: number[];
  sourcers?: number[];
  recruiters?: number[];
  coordinators?: number[];
}

export class HarvestJobsApi extends BaseGreenhouseHarvestSDK {
  /**
   * List all jobs
   * @param params - Query parameters for listing jobs
   * @returns Promise with the response containing an array of Job objects
   */
  async listJobs(params?: ListJobsParams): Promise<Job[]> {
    return this.request({
      method: 'GET',
      url: '/v1/jobs',
      params
    });
  }

  /**
   * Retrieve a job
   * @param id - The ID of the job to retrieve
   * @returns Promise with the response containing the Job object
   */
  async getJob(id: number): Promise<Job> {
    return this.request({
      method: 'GET',
      url: `/v1/jobs/${id}`
    });
  }

  /**
   * Create a new job
   * @param params - Parameters for creating a new job
   * @returns Promise with the response containing the created Job object
   */
  async createJob(params: CreateJobParams): Promise<Job> {
    return this.request({
      method: 'POST',
      url: '/v1/jobs',
      data: params
    });
  }

  /**
   * Update a job
   * @param id - The ID of the job to update
   * @param params - Parameters for updating the job
   * @returns Promise with the response containing the updated Job object
   */
  async updateJob(id: number, params: UpdateJobParams): Promise<Job> {
    return this.request({
      method: 'PATCH',
      url: `/v1/jobs/${id}`,
      data: params
    });
  }

  /**
   * Get the hiring team for a job
   * @param id - The ID of the job
   * @returns Promise with the response containing the hiring team information
   */
  async getHiringTeam(id: number): Promise<{
    hiring_managers: Array<{ user_id: number; active: boolean }>;
    recruiters: Array<{ user_id: number; active: boolean; responsible: boolean }>;
    coordinators: Array<{ user_id: number; active: boolean; responsible: boolean }>;
    sourcers: Array<{ user_id: number; active: boolean }>;
  }> {
    return this.request({
      method: 'GET',
      url: `/v1/jobs/${id}/hiring_team`
    });
  }

  /**
   * Replace the hiring team for a job
   * @param id - The ID of the job
   * @param params - Parameters for updating the hiring team
   * @returns Promise with the response indicating success
   */
  async replaceHiringTeam(id: number, params: UpdateHiringTeamParams): Promise<{ success: boolean }> {
    return this.request({
      method: 'PUT',
      url: `/v1/jobs/${id}/hiring_team`,
      data: params
    });
  }

  /**
   * Add members to the hiring team for a job
   * @param id - The ID of the job
   * @param params - Parameters for adding hiring team members
   * @returns Promise with the response indicating success
   */
  async addHiringTeamMembers(id: number, params: UpdateHiringTeamParams): Promise<{ success: boolean }> {
    return this.request({
      method: 'POST',
      url: `/v1/jobs/${id}/hiring_team`,
      data: params
    });
  }

  /**
   * Remove members from the hiring team for a job
   * @param id - The ID of the job
   * @param params - Parameters for removing hiring team members
   * @returns Promise with the response indicating success
   */
  async removeHiringTeamMembers(id: number, params: RemoveHiringTeamParams): Promise<{ success: boolean }> {
    return this.request({
      method: 'DELETE',
      url: `/v1/jobs/${id}/hiring_team`,
      data: params
    });
  }
}
