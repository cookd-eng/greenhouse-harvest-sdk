import { BaseGreenhouseHarvestSDK } from "./base_api";
export interface CustomFieldOption {
    id: number;
    name: string;
    priority: number;
    external_id: string | null;
}
export interface CustomField {
    id: number;
    name: string;
    active: boolean;
    field_type: "job" | "candidate" | "application" | "offer" | "opening" | "rejection_question" | "referral_question" | "user_attribute";
    priority: number;
    value_type: "short_text" | "long_text" | "yes_no" | "single_select" | "multi_select" | "currency" | "currency_range" | "number" | "number_range" | "date" | "url" | "user";
    private: boolean;
    required: boolean;
    require_approval: boolean;
    trigger_new_version: boolean;
    name_key: string;
    description: string;
    expose_in_job_board_api: boolean;
    api_only: boolean;
    offices: Array<{
        id: number;
        name: string;
        location: {
            name: string;
        };
        primary_contact_user_id: number | null;
        parent_id: number | null;
        parent_office_external_id: string | null;
        child_ids: number[];
        child_office_external_ids: string[];
        external_id: string | null;
    }>;
    departments: Array<{
        id: number;
        name: string;
    }>;
    template_token_string: string;
    custom_field_options: CustomFieldOption[];
}
export interface ListCustomFieldsParams {
    include_inactive?: boolean;
}
export interface CreateCustomFieldParams {
    name: string;
    description?: string;
    field_type: CustomField["field_type"];
    value_type: CustomField["value_type"];
    private?: boolean;
    required?: boolean;
    require_approval?: boolean;
    trigger_new_version?: boolean;
    expose_in_job_board_api?: boolean;
    api_only?: boolean;
    office_ids?: number[];
    department_ids?: number[];
    custom_field_options?: Array<{
        name: string;
        priority: number;
        external_id?: string;
    }>;
    generate_email_token?: boolean;
}
export interface UpdateCustomFieldParams extends Partial<CreateCustomFieldParams> {
    template_token_string?: string;
}
export interface CreateCustomFieldOptionsParams {
    options: Array<{
        name: string;
        priority: number;
        external_id?: string;
    }>;
}
export interface UpdateCustomFieldOptionsParams {
    options: Array<{
        id: number;
        name?: string;
        priority?: number;
        external_id?: string | null;
    }>;
}
export interface RemoveCustomFieldOptionsParams {
    option_ids: number[];
}
export declare class HarvestCustomFieldsApi extends BaseGreenhouseHarvestSDK {
    /**
     * List Custom Fields
     * @param fieldType The type of custom fields to retrieve
     * @param params Optional parameters for the request
     * @param onBehalfOf The user to make the request on behalf of
     */
    listCustomFields(fieldType: CustomField["field_type"], onBehalfOf: string, params?: ListCustomFieldsParams): Promise<CustomField[]>;
    /**
     * Retrieve a Custom Field
     * @param id The ID of the custom field to retrieve
     * @param onBehalfOf The user to make the request on behalf of
     */
    getCustomField(id: number, onBehalfOf: string): Promise<CustomField>;
    /**
     * Create a Custom Field
     * @param params The parameters for creating a custom field
     * @param onBehalfOf The user to make the request on behalf of
     */
    createCustomField(params: CreateCustomFieldParams, onBehalfOf: string): Promise<CustomField>;
    /**
     * Update a Custom Field
     * @param id The ID of the custom field to update
     * @param params The parameters for updating a custom field
     * @param onBehalfOf The user to make the request on behalf of
     */
    updateCustomField(id: number, params: UpdateCustomFieldParams, onBehalfOf: string): Promise<CustomField>;
    /**
     * Delete a Custom Field
     * @param id The ID of the custom field to delete
     * @param onBehalfOf The user to make the request on behalf of
     */
    deleteCustomField(id: number, onBehalfOf: string): Promise<{
        success: string;
    }>;
    /**
     * List Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param type The type of options to retrieve (all, active, or inactive)
     * @param onBehalfOf The user to make the request on behalf of
     */
    listCustomFieldOptions(customFieldId: number, type: "all" | "active" | "inactive" | undefined, onBehalfOf: string): Promise<CustomFieldOption[]>;
    /**
     * Create Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param params The parameters for creating custom field options
     * @param onBehalfOf The user to make the request on behalf of
     */
    createCustomFieldOptions(customFieldId: number, params: CreateCustomFieldOptionsParams, onBehalfOf: string): Promise<{
        success: boolean;
    }>;
    /**
     * Update Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param params The parameters for updating custom field options
     * @param onBehalfOf The user to make the request on behalf of
     */
    updateCustomFieldOptions(customFieldId: number, params: UpdateCustomFieldOptionsParams, onBehalfOf: string): Promise<{
        success: boolean;
    }>;
    /**
     * Remove Custom Field Options
     * @param customFieldId The ID of the custom field
     * @param params The parameters for removing custom field options
     * @param onBehalfOf The user to make the request on behalf of
     */
    removeCustomFieldOptions(customFieldId: number, params: RemoveCustomFieldOptionsParams, onBehalfOf: string): Promise<{
        message: string;
    }>;
}
