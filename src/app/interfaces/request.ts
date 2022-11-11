export interface IRequest {
  info: any;
  results: any;
}

export interface IPaginatedRequest {
  status: boolean;
  data: IPaginatedData;
}

export interface IPaginatedData {
  current_page: number;
  data: any;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url?: any;
  path: string;
  per_page: string;
  prev_page_url?: any;
  to: number;
  total: number;
}

export interface ILink {
  url: string;
  label: string;
  active: boolean;
}
