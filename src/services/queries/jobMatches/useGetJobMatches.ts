import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { JobMatchesParam } from "../../models/jobMatches/types"
import { getJobMatches, GetJobMatches } from "../../models/jobMatches/getJobMatches"

type Params = {
    param: JobMatchesParam
    options?: Partial<
        UseQueryOptions<
            Awaited<GetJobMatches>,
            ErrorResponse
        >
    >
}

export const useGetJobMatches = ({ param, options }: Params) => (
    useQuery({
        queryKey: ['jobMatches', param.userId],
        queryFn: () => getJobMatches(param),
        ...options,
    })
)
