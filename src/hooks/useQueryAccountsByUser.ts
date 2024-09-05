import { useQuery } from '@tanstack/react-query';
import { getAccountsByUser } from '@api/account.api';

export const useQueryAccountsByUser = (id: string) => {
  const queryAccountsByUser = useQuery({
    queryKey: ['accountsByUser', id],
    queryFn: () => getAccountsByUser(id),
  });
  return queryAccountsByUser;
};
