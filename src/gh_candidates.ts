import { Application } from "./gh_applications";
import { BaseGreenhouseHarvestSDK } from "./base_api";

export interface Candidate {
  id: number;
  first_name: string;
  last_name: string;
  company: string | null;
  title: string | null;
  created_at: string;
  updated_at: string;
  last_activity: string;
  is_private: boolean;
  photo_url: string | null;
  attachments: Array<{
    filename: string;
    url: string;
    type: string;
    created_at: string;
  }>;
  application_ids: number[];
  phone_numbers: Array<{
    value: string;
    type: string;
  }>;
  addresses: Array<{
    value: string;
    type: string;
  }>;
  email_addresses: Array<{
    value: string;
    type: string;
  }>;
  website_addresses: Array<{
    value: string;
    type: string;
  }>;
  social_media_addresses: Array<{
    value: string;
  }>;
  recruiter: {
    id: number;
    first_name: string;
    last_name: string;
    name: string;
    employee_id: string | null;
  } | null;
  coordinator: {
    id: number;
    first_name: string;
    last_name: string;
    name: string;
    employee_id: string | null;
  } | null;
  can_email: boolean;
  tags: string[];
  applications: Application[];
  educations: Education[];
  employments: Employment[];
  custom_fields: Record<string, any>;
  keyed_custom_fields: Record<
    string,
    {
      name: string;
      type: string;
      value: any;
    }
  >;
}

export interface Education {
  id: number;
  school_name: string;
  degree: string;
  discipline: string;
  start_date: string;
  end_date: string;
}

export interface Employment {
  id: number;
  company_name: string;
  title: string;
  start_date: string;
  end_date: string;
}

export interface ListCandidatesParams {
  per_page?: number;
  page?: number;
  skip_count?: boolean;
  created_before?: string;
  created_after?: string;
  updated_before?: string;
  updated_after?: string;
  job_id?: number;
  email?: string;
  candidate_ids?: string;
}

export interface AddCandidateParams {
  first_name: string;
  last_name: string;
  company?: string;
  title?: string;
  phone_numbers?: Array<{ value: string; type: string }>;
  addresses?: Array<{ value: string; type: string }>;
  email_addresses?: Array<{ value: string; type: string }>;
  website_addresses?: Array<{ value: string; type: string }>;
  social_media_addresses?: Array<{ value: string }>;
  educations?: Array<{
    school_id?: number;
    discipline_id?: number;
    degree_id?: number;
    start_date?: string;
    end_date?: string;
  }>;
  employments?: Array<{
    company_name: string;
    title: string;
    start_date: string;
    end_date?: string;
  }>;
  tags?: string[];
  custom_fields?: Array<{
    id?: number;
    name_key?: string;
    value: any;
    delete_value?: boolean;
  }>;
  recruiter?: { id?: number; email?: string };
  coordinator?: { id?: number; email?: string };
  applications: Array<{
    job_id: number;
  }>;
}

export interface UpdateCandidateParams extends Partial<AddCandidateParams> {}

export interface AddNoteParams {
  user_id: number;
  body: string;
  visibility: "admin_only" | "private" | "public";
}

export interface AddEmailNoteParams {
  user_id: number;
  to: string;
  from: string;
  cc?: string[];
  subject: string;
  body: string;
}

export interface AddAttachmentParams {
  filename: string;
  type: "resume" | "cover_letter" | "admin_only";
  content?: string;
  url?: string;
  content_type?: string;
}

export interface AnonymizeCandidateParams {
  fields: string;
}

export interface MergeCandidatesParams {
  primary_candidate_id: number;
  duplicate_candidate_id: number;
}

export class HarvestCandidatesApi extends BaseGreenhouseHarvestSDK {
  async listCandidates(params?: ListCandidatesParams): Promise<Candidate[]> {
    return this.request({
      method: "GET",
      url: "/v1/candidates",
      params,
    });
  }

  async getCandidate(id: number): Promise<Candidate> {
    return this.request({
      method: "GET",
      url: `/v1/candidates/${id}`,
    });
  }

  async deleteCandidate(id: number): Promise<{ message: string }> {
    return this.request({
      method: "DELETE",
      url: `/v1/candidates/${id}`,
    });
  }

  async updateCandidate(
    id: number,
    params: UpdateCandidateParams,
  ): Promise<Candidate> {
    return this.request({
      method: "PATCH",
      url: `/v1/candidates/${id}`,
      data: params,
    });
  }

  async addCandidate(params: AddCandidateParams): Promise<Candidate> {
    return this.request({
      method: "POST",
      url: "/v1/candidates",
      data: params,
    });
  }

  async addNote(
    candidateId: number,
    params: AddNoteParams,
  ): Promise<{
    id: number;
    created_at: string;
    body: string;
    user: {
      id: number;
      first_name: string;
      last_name: string;
      name: string;
      employee_id: string | null;
    };
    private: boolean;
    visibility: string;
  }> {
    return this.request({
      method: "POST",
      url: `/v1/candidates/${candidateId}/activity_feed/notes`,
      data: params,
    });
  }

  async addEmailNote(
    candidateId: number,
    params: AddEmailNoteParams,
  ): Promise<{
    id: number;
    created_at: string;
    subject: string;
    body: string;
    to: string;
    from: string;
    cc: string[];
    user: {
      id: number;
      first_name: string;
      last_name: string;
      name: string;
      employee_id: string;
    };
  }> {
    return this.request({
      method: "POST",
      url: `/v1/candidates/${candidateId}/activity_feed/emails`,
      data: params,
    });
  }

  async addEducation(
    candidateId: number,
    params: {
      school_id?: number;
      discipline_id?: number;
      degree_id?: number;
      start_date?: string;
      end_date?: string;
    },
  ): Promise<Education> {
    return this.request({
      method: "POST",
      url: `/v1/candidates/${candidateId}/educations`,
      data: params,
    });
  }

  async deleteEducation(
    candidateId: number,
    educationId: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.request({
      method: "DELETE",
      url: `/v1/candidates/${candidateId}/educations/${educationId}`,
    });
  }

  async addEmployment(
    candidateId: number,
    params: {
      company_name: string;
      title: string;
      start_date: string;
      end_date?: string;
    },
  ): Promise<Employment> {
    return this.request({
      method: "POST",
      url: `/v1/candidates/${candidateId}/employments`,
      data: params,
    });
  }

  async deleteEmployment(
    candidateId: number,
    employmentId: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.request({
      method: "DELETE",
      url: `/v1/candidates/${candidateId}/employments/${employmentId}`,
    });
  }

  async addAttachment(
    candidateId: number,
    params: AddAttachmentParams,
  ): Promise<{
    filename: string;
    url: string;
    type: string;
    content_type: string;
  }> {
    return this.request({
      method: "POST",
      url: `/v1/candidates/${candidateId}/attachments`,
      data: params,
    });
  }

  async anonymizeCandidate(
    id: number,
    params: AnonymizeCandidateParams,
  ): Promise<Candidate> {
    return this.request({
      method: "PUT",
      url: `/v1/candidates/${id}/anonymize`,
      params,
    });
  }

  async mergeCandidates(params: MergeCandidatesParams): Promise<Candidate> {
    return this.request({
      method: "PUT",
      url: "/v1/candidates/merge",
      data: params,
    });
  }

  static getCandidateProfileUrl(candidateId: number): string {
    return `https://app7.greenhouse.io/people/${candidateId}`;
  }
}
