import { useQuery } from '@tanstack/react-query';
import { getAccounts } from '@api/account.api';

export const useQueryAccounts = () => {
  const queryAccounts = useQuery({
    queryKey: ['accountsByUser'],
    queryFn: () => getAccounts(),
  });
  return queryAccounts;
};
