export class BusinessReview {
    id: string;
    rating: number;
    user: UserProfile = new UserProfile();
    text: string;
    time_created: string;
    name: string;
}

export class UserProfile {
    id: string;
    profile_url: string;
    image_url: string;
    name: string;
}