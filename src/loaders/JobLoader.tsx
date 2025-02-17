import { Params } from "react-router-dom";

export const jobLoader = async ({ params }: { params: Params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    return await res.json();
};