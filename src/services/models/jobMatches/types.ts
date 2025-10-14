export type JobMatchesParam = {
    userId: string
}

export type JobMatch = {
    id: number
    user_id: number
    title: string
    company: string
    location: string
    score: string
    description: string
}

export type JobMatchesResponse = JobMatch[]