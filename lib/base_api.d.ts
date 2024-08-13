import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BaseGreenhouseHarvestSDK {
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
    protected request<T>(config: AxiosRequestConfig): Promise<T>;
}
