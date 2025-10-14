import { fetcher } from "../../api/fetcher";
import { ProfileRequest, ProfileResponse } from "./types";

export const postProfile = async (data: ProfileRequest) => (
    await fetcher<SuccessResponse & ProfileResponse>({
        url: '/profile',
        method: 'post',
        data,
    })
)

export type PostProfile = ReturnType<typeof postProfile>
