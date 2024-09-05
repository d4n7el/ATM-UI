import { useQuery } from '@tanstack/react-query';
import { getOperations } from '@api/operation.api';

export const useQueryOPerations = () => {
  const queryOperations = useQuery({
    queryKey: ['operations'],
    queryFn: () => getOperations(),
  });
  return queryOperations;
};
