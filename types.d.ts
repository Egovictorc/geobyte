type MediaType = "facebook_url" | "twitter_url" | "instagram_url" | "pintrest_url"
type SocialMediaProps = Record<MediaType, string>
type UserProps = {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    gender: string;
    auth_type?: string;
    bio?: string;
    website_url: string
    token?: string;
} & SocialMediaProps

type API_ERROR = { status: 'error'; message: string };