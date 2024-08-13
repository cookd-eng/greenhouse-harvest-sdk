import { BaseGreenhouseHarvestSDK } from "./base_api";

// New interfaces for Custom Fields
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
  field_type:
    | "job"
    | "candidate"
    | "application"
    | "offer"
    | "opening"
    | "rejection_question"
    | "referral_question"
    | "user_attribute";
  priority: number;
  value_type:
    | "short_text"
    | "long_text"
    | "yes_no"
    | "single_select"
    | "multi_select"
    | "currency"
    | "currency_range"
    | "number"
    | "number_range"
    | "date"
    | "url"
    | "user";
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

export interface UpdateCustomFieldParams
  extends Partial<CreateCustomFieldParams> {
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

export class HarvestCustomFieldsApi extends BaseGreenhouseHarvestSDK {
  /**
   * List Custom Fields
   * @param fieldType The type of custom fields to retrieve
   * @param params Optional parameters for the request
   * @param onBehalfOf The user to make the request on behalf of
   */
  async listCustomFields(
    fieldType: CustomField["field_type"],
    onBehalfOf: string,
    params?: ListCustomFieldsParams,
  ): Promise<CustomField[]> {
    return this.request({
      method: "GET",
      url: `/v1/custom_fields/${fieldType}`,
      params,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * Retrieve a Custom Field
   * @param id The ID of the custom field to retrieve
   * @param onBehalfOf The user to make the request on behalf of
   */
  async getCustomField(id: number, onBehalfOf: string): Promise<CustomField> {
    return this.request({
      method: "GET",
      url: `/v1/custom_field/${id}`,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * Create a Custom Field
   * @param params The parameters for creating a custom field
   * @param onBehalfOf The user to make the request on behalf of
   */
  async createCustomField(
    params: CreateCustomFieldParams,
    onBehalfOf: string,
  ): Promise<CustomField> {
    return this.request({
      method: "POST",
      url: "/v1/custom_fields",
      data: params,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * Update a Custom Field
   * @param id The ID of the custom field to update
   * @param params The parameters for updating a custom field
   * @param onBehalfOf The user to make the request on behalf of
   */
  async updateCustomField(
    id: number,
    params: UpdateCustomFieldParams,
    onBehalfOf: string,
  ): Promise<CustomField> {
    return this.request({
      method: "PATCH",
      url: `/v1/custom_fields/${id}`,
      data: params,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * Delete a Custom Field
   * @param id The ID of the custom field to delete
   * @param onBehalfOf The user to make the request on behalf of
   */
  async deleteCustomField(
    id: number,
    onBehalfOf: string,
  ): Promise<{ success: string }> {
    return this.request({
      method: "DELETE",
      url: `/v1/custom_fields/${id}`,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * List Custom Field Options
   * @param customFieldId The ID of the custom field
   * @param type The type of options to retrieve (all, active, or inactive)
   * @param onBehalfOf The user to make the request on behalf of
   */
  async listCustomFieldOptions(
    customFieldId: number,
    type: "all" | "active" | "inactive" = "active",
    onBehalfOf: string,
  ): Promise<CustomFieldOption[]> {
    return this.request({
      method: "GET",
      url: `/v1/custom_field/${customFieldId}/custom_field_options`,
      params: { type },
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * Create Custom Field Options
   * @param customFieldId The ID of the custom field
   * @param params The parameters for creating custom field options
   * @param onBehalfOf The user to make the request on behalf of
   */
  async createCustomFieldOptions(
    customFieldId: number,
    params: CreateCustomFieldOptionsParams,
    onBehalfOf: string,
  ): Promise<{ success: boolean }> {
    return this.request({
      method: "POST",
      url: `/v1/custom_field/${customFieldId}/custom_field_options`,
      data: params,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * Update Custom Field Options
   * @param customFieldId The ID of the custom field
   * @param params The parameters for updating custom field options
   * @param onBehalfOf The user to make the request on behalf of
   */
  async updateCustomFieldOptions(
    customFieldId: number,
    params: UpdateCustomFieldOptionsParams,
    onBehalfOf: string,
  ): Promise<{ success: boolean }> {
    return this.request({
      method: "PATCH",
      url: `/v1/custom_field/${customFieldId}/custom_field_options`,
      data: params,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }

  /**
   * Remove Custom Field Options
   * @param customFieldId The ID of the custom field
   * @param params The parameters for removing custom field options
   * @param onBehalfOf The user to make the request on behalf of
   */
  async removeCustomFieldOptions(
    customFieldId: number,
    params: RemoveCustomFieldOptionsParams,
    onBehalfOf: string,
  ): Promise<{ message: string }> {
    return this.request({
      method: "DELETE",
      url: `/v1/custom_field/${customFieldId}/custom_field_options`,
      data: params,
      headers: { "On-Behalf-Of": onBehalfOf },
    });
  }
}
