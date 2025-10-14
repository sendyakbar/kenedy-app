export type ProfileRequest = {
    name: string
    education: string
    experience: string
    skills: string
    preferences: string
}

export type ProfileResponse = {
    message: string
    status: string
    user_id: string
}
