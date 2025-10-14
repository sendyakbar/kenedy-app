import { fetcher } from "../../api/fetcher";
import { JobMatchesParam, JobMatchesResponse } from "./types";

export const getJobMatches = async (param: JobMatchesParam) => (
    await fetcher<SuccessResponse & JobMatchesResponse>({
        url: `/matches/${param.userId}`,
        method: 'get',
    })
)

export type GetJobMatches = ReturnType<typeof getJobMatches>
