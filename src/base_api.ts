import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseGreenhouseHarvestSDK {
  protected client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  protected async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.client(config);
      console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "API request failed:",
          JSON.stringify(
            {
              status: error.response?.status,
              statusText: error.response?.statusText,
              data: error.response?.data,
            },
            null,
            2,
          ),
        );
        throw new Error(
          `API request failed: ${error.response?.status} ${error.response?.statusText}`,
        );
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  }
}
