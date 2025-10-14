import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { postProfile, PostProfile } from "../../models/profile/postProfile";
import { ProfileRequest } from "../../models/profile/types";

type Options = Partial<
    UseMutationOptions<
        Awaited<PostProfile>,
        ErrorResponse,
        ProfileRequest
    >
>

export const usePostProfile = (options?: Options) => (
    useMutation({
        mutationFn: postProfile,
        ...options,
    })
)
