import { JobMatch } from "../../services/models/jobMatches/types";

export interface JobCardProps {
    job: JobMatch;
    onPress?: (job: JobMatch) => void;
}

export interface JobMatchBadgeProps {
    score: string;
}

export interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    icon?: string;
}

