export type JobMatchesParam = {
    userId: string
}

export type JobMatch = {
    user_id: string
    job_id: string
    user_role: string
    job_role: string
    skills: string
    job_description: string
    match_score: number
    reason: string
    updated_at: string
}

export type JobMatchesResponse = JobMatch[]