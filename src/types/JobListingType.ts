import { Job } from "./JobJsonType.ts";

export interface JobListingType {
    job: Job;
    key: Job["id"];
}