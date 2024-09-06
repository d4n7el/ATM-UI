import { useQuery } from '@tanstack/react-query';
import { getOperations } from '@api/operation.api';

export interface Props {
  sourceAccountNum: string | undefined;
  targetAccountNum: string | undefined;
  transactionType: string | undefined;
}

export const useQueryOPerations = ({
  sourceAccountNum,
  transactionType,
  targetAccountNum,
}: Props) => {
  const queryOperations = useQuery({
    queryKey: ['operations'],
    queryFn: () =>
      getOperations({
        sourceAccountNum: sourceAccountNum ?? undefined,
        targetAccountNum: targetAccountNum ?? undefined,
        transactionType: transactionType ?? undefined,
      }),
  });
  return queryOperations;
};
