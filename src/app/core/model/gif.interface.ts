export interface GiphyResult {
  data: Array<GifData>;
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}

export interface GifData {
  images: {
    fixed_width: {
      url: string;
    };
  };
  title?: string;
  username?: string;
  user?: User
  id?: string;
  import_datetime?: string;
  type?: string;
  rating: string;
}

export interface SearchReqeust {
  searchTerm: string;
  offset: number;
  pageSize: number;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export enum SortingEnum {
  none = 'none',
  asc = 'asc',
  desc = 'desc',
}

export interface SelectOption {
  name: string;
  code: string;
}
