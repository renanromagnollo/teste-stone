import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ReqType } from '../types/type-req';
import { BASE_URL } from '../config/environment';

async function fetchData(): Promise<ReqType> {
  const { data } = await axios.get<ReqType>(BASE_URL + '/json/last/USD-BRL');
  console.log(data);
  return data;
}
export function useReactQuery() {
  const query = useQuery<ReqType>({
    queryKey: ['USD-BRL'],
    queryFn: fetchData,
    staleTime: 1000 * 60,
  });
  return query;
}
