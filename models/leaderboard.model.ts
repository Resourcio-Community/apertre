interface PR {
    url: string;
    difficulty: string;
}

export interface Contributor {
    user_name: string;
    avatar_url: string;
    user_url: string;
    total_points: number;
    pr_urls: PR[],
    full_name: string;
    linkedIn: string;
    rank: number;
}