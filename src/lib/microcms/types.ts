import type {
  GetListRequest as MicroCMSGetListRequest,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
} from 'microcms-js-sdk';

// EndPoints
type Movies = {
  title: string;
  description: string;
  url: `https://www.youtube.com/embed/${string}?si=${string}`;
  startAt?: number;
  thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

type Images = {
  title: string;
  description: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

type Members = {
  name: string;
  description: string;
  role: string;
} & MicroCMSListContent;

type Biographies = {
  title: string;
  description: string;
  dateAt: string;
} & MicroCMSListContent;

type Endpoints = {
  movies: Movies;
  images: Images;
  members: Members;
  biographies: Biographies;
};

// MicroCMS Types
type GetListQueries<F> = {
  fields?: F[];
} & Omit<MicroCMSQueries, 'fields'>;

type GetListRequest<E extends keyof Endpoints, F extends keyof Endpoints[E]> = {
  endpoint: E;
  queries?: GetListQueries<F>;
} & Omit<MicroCMSGetListRequest, 'endpoint' | 'queries'>;

type GetListResponse<T, F extends keyof T> = {
  contents: Pick<T, F>[];
  totalCount: number;
  offset: number;
  limit: number;
} & Omit<MicroCMSListResponse<T>, 'contents'>;

export type {
  Biographies,
  Endpoints,
  GetListQueries,
  GetListRequest,
  GetListResponse,
  Images,
  Members,
  Movies,
};
