interface SponsorImage {
    imageUrl: string;
    width: number;
    height: number;
}

export interface Sponsor {
    title?: string;
    description: string;
    images: SponsorImage[];
    priority: number;
}