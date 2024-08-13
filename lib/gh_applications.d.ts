import { BaseGreenhouseHarvestSDK } from "./base_api";
interface ListApplicationsParams {
    per_page?: number;
    page?: number;
    created_before?: string;
    created_after?: string;
    last_activity_after?: string;
    job_id?: number;
    status?: "active" | "converted" | "hired" | "rejected";
}
export interface Application {
    id: number;
    candidate_id: number;
    prospect: boolean;
    applied_at: string;
    rejected_at: string | null;
    last_activity_at: string;
    location: {
        address: string;
    };
    source: {
        id: number;
        public_name: string;
    };
    credited_to: {
        id: number;
        first_name: string;
        last_name: string;
        name: string;
        employee_id: string | null;
    } | null;
    rejection_reason: {
        id: number;
        name: string;
        type: {
            id: number;
            name: string;
        };
    } | null;
    rejection_details: {
        custom_fields: Record<string, any>;
        keyed_custom_fields: Record<string, {
            name: string;
            type: string;
            value: any;
        }>;
    } | null;
    jobs: Array<{
        id: number;
        name: string;
    }>;
    job_post_id: number | null;
    status: string;
    current_stage: {
        id: number;
        name: string;
    } | null;
    answers: Array<{
        question: string;
        answer: string;
    }>;
    prospective_office: any;
    prospective_department: any;
    prospect_detail: {
        prospect_pool: any;
        prospect_stage: any;
        prospect_owner: any;
    };
    custom_fields: Record<string, any>;
    keyed_custom_fields: Record<string, {
        name: string;
        type: string;
        value: any;
    }>;
    attachments: Array<{
        filename: string;
        url: string;
        type: string;
        created_at: string;
    }>;
}
interface AddApplicationParams {
    prospect: boolean;
    job_ids?: number[];
    job_id?: number;
    source_id?: number;
    initial_stage_id?: number;
    referrer?: {
        type: "id" | "email" | "outside";
        value: string;
    };
    attachments?: Array<{
        filename: string;
        type: string;
        content: string;
        content_type: string;
    }>;
    prospect_pool_id?: number;
    prospect_pool_stage_id?: number;
    prospect_owner_id?: number;
    prospective_department_id?: number;
    prospective_office_id?: number;
}
interface UpdateApplicationParams {
    source_id?: number;
    referrer?: {
        type: "id" | "email" | "outside";
        value: string;
    };
    custom_fields?: Record<string, any>;
    prospect_pool_id?: number;
    prospect_stage_id?: number;
    rejection_details?: {
        custom_fields?: Record<string, any>;
    };
}
interface AdvanceApplicationParams {
    from_stage_id: number;
}
interface MoveApplicationParams {
    from_stage_id: number;
    to_stage_id: number;
}
interface TransferApplicationParams {
    new_job_id: number;
    new_stage_id?: number;
}
interface ConvertProspectParams {
    job_id: number;
    initial_stage_id?: number;
}
interface AddAttachmentParams {
    filename: string;
    type: "resume" | "cover_letter" | "other" | "take_home_test" | "offer_letter" | "signed_offer_letter";
    content?: string;
    url?: string;
    visibility?: "public" | "private" | "admin_only";
    content_type?: string;
}
interface HireApplicationParams {
    start_date?: string;
    opening_id?: number;
    close_reason_id?: number;
}
interface RejectApplicationParams {
    rejection_reason_id?: number;
    notes?: string;
    rejection_email?: {
        send_email_at?: string;
        email_template_id: number;
    };
}
interface UpdateRejectionReasonParams {
    rejection_reason_id: number;
}
export declare class HarvestApplicationsApi extends BaseGreenhouseHarvestSDK {
    /**
     * List all applications
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param params - Query parameters for listing applications
     * @returns Promise with the response containing an array of Application objects
     */
    listApplications(onBehalfOf: string, params?: ListApplicationsParams): Promise<Application[]>;
    /**
     * Retrieve an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to retrieve
     * @returns Promise with the response containing the Application object
     */
    getApplication(onBehalfOf: string, id: number): Promise<Application>;
    /**
     * Delete an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to delete
     * @returns Promise with the response containing a success message
     */
    deleteApplication(onBehalfOf: string, id: number): Promise<{
        message: string;
    }>;
    /**
     * Add an application to a candidate
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param candidateId - The ID of the candidate
     * @param params - Parameters for adding the application
     * @returns Promise with the response containing the new Application object
     */
    addApplication(onBehalfOf: string, candidateId: number, params: AddApplicationParams): Promise<Application>;
    /**
     * Update an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to update
     * @param params - Parameters for updating the application
     * @returns Promise with the response containing the updated Application object
     */
    updateApplication(onBehalfOf: string, id: number, params: UpdateApplicationParams): Promise<Application>;
    /**
     * Advance an application to the next stage
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to advance
     * @param params - Parameters for advancing the application
     * @returns Promise with the response containing the updated Application object
     */
    advanceApplication(onBehalfOf: string, id: number, params: AdvanceApplicationParams): Promise<Application>;
    /**
     * Move an application to a different stage (same job)
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to move
     * @param params - Parameters for moving the application
     * @returns Promise with the response containing the updated Application object
     */
    moveApplication(onBehalfOf: string, id: number, params: MoveApplicationParams): Promise<Application>;
    /**
     * Transfer an application to a different job
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to transfer
     * @param params - Parameters for transferring the application
     * @returns Promise with the response containing the updated Application object
     */
    transferApplication(onBehalfOf: string, id: number, params: TransferApplicationParams): Promise<Application>;
    /**
     * Convert a prospect application to a candidate application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the prospect application to convert
     * @param params - Parameters for converting the prospect
     * @returns Promise with the response containing the conversion result
     */
    convertProspect(onBehalfOf: string, id: number, params: ConvertProspectParams): Promise<{
        success: boolean;
        old_application_id: number;
        new_application_id: number;
        new_job_id: number;
        new_stage_id: number;
    }>;
    /**
     * Add an attachment to an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application
     * @param params - Parameters for adding the attachment
     * @returns Promise with the response containing the attachment details
     */
    addAttachment(onBehalfOf: string, id: number, params: AddAttachmentParams): Promise<{
        filename: string;
        url: string;
        type: string;
        content_type: string;
    }>;
    /**
     * Hire an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to hire
     * @param params - Parameters for hiring the application
     * @returns Promise with the response containing the updated Application object
     */
    hireApplication(onBehalfOf: string, id: number, params: HireApplicationParams): Promise<Application>;
    /**
     * Reject an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to reject
     * @param params - Parameters for rejecting the application
     * @returns Promise with the response containing the updated Application object
     */
    rejectApplication(onBehalfOf: string, id: number, params: RejectApplicationParams): Promise<Application>;
    /**
     * Update the rejection reason for a rejected application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the rejected application
     * @param params - Parameters for updating the rejection reason
     * @returns Promise with the response containing the update result
     */
    updateRejectionReason(onBehalfOf: string, id: number, params: UpdateRejectionReasonParams): Promise<{
        id: number;
        message: string;
        success: boolean;
    }>;
    /**
     * Unreject an application
     * @param onBehalfOf - The user ID to make the request on behalf of
     * @param id - The ID of the application to unreject
     * @returns Promise with the response containing the updated Application object
     */
    unrejectApplication(onBehalfOf: string, id: number): Promise<Application>;
}
export {};
