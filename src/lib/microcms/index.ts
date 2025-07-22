import type {
  MicroCMSClient,
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListContent,
  MicroCMSQueries,
} from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';

import type {
  Endpoints,
  GetListQueries,
  GetListRequest,
  GetListResponse,
} from './types';
import { ENVIRONMENTS } from '../utils';

const _queriesParser = <T>(queries: GetListQueries<T>): MicroCMSQueries => ({
  ...queries,
  fields: queries.fields?.map((v) => String(v)),
});

const _createClient = (clientArg: MicroCMSClient) => {
  const _client = createClient(clientArg);

  const getList = <
    E extends keyof Endpoints,
    C extends Endpoints[E] & MicroCMSListContent,
    F extends keyof Endpoints[E],
  >({
    endpoint,
    queries = {},
    ...args
  }: GetListRequest<E, F>): Promise<GetListResponse<C, F>> => {
    return _client.getList<C>({
      endpoint: String(endpoint),
      queries: _queriesParser(queries),
      ...args,
    });
  };

  const getListDetail = <
    E extends keyof Endpoints,
    C extends Endpoints[E] & MicroCMSContentId & MicroCMSDate,
    F extends keyof Endpoints[E],
  >({
    endpoint,
    contentId,
    queries = {},
    ...args
  }: GetListRequest<E, F> & { contentId: string }): Promise<C> => {
    return _client.getListDetail<C>({
      endpoint: String(endpoint),
      contentId,
      queries: _queriesParser(queries),
      ...args,
    });
  };

  return { ..._client, getList, getListDetail };
};

export const client = _createClient({
  serviceDomain: ENVIRONMENTS.MICROCMS_SERVICE_DOMAIN(),
  apiKey: ENVIRONMENTS.MICROCMS_API_KEY(),
});
