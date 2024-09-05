import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@api/user.api';

export const useQueryUsers = () => {
  const queryUsers = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
  return queryUsers;
};
