import { fetcher } from "../../api/fetcher";
import { ExperiencesRequest, ExperiencesResponse } from "./types";

export const postExperiences = async (data: ExperiencesRequest) => (
    await fetcher<SuccessResponse<ExperiencesResponse>>({
        url: '/experiences',
        method: 'post',
        data,
    })
)

export type PostExperiences = ReturnType<typeof postExperiences>
