import { Job } from "./JobJsonType.ts";

export type AddJobSubmitType = (job: Job) => void;

export type AddJobPageProps = {
    addJobSubmit: AddJobSubmitType;
};