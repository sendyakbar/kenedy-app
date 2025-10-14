import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { postExperiences, PostExperiences } from "../../models/experiences/postExperiences";
import { ExperiencesRequest } from "../../models/experiences/types";

type Options = Partial<
    UseMutationOptions<
        Awaited<PostExperiences>,
        ErrorResponse,
        ExperiencesRequest
    >
>

export const usePostExperiences = (options?: Options) => (
    useMutation({
        mutationFn: postExperiences,
        ...options,
    })
)
