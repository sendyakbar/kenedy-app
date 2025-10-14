export type Experience = {
    user_id: number
    title: string
    company: string
    duration: string
    description: string
}

export type ExperiencesRequest = Experience[]

export type ExperiencesResponse = {
    message: string
    status: string
}
