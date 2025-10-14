import { fetcher } from "../../api/fetcher";
import { ExperiencesRequest } from "./types";

export const postExperiences = async (data: ExperiencesRequest) => (
    await fetcher<SuccessResponse>({
        url: '/experiences',
        method: 'post',
        data,
    })
)

export type PostExperiences = ReturnType<typeof postExperiences>
