import { useState } from 'react';
import { useQueryOPerations } from './useQueryOperations';

const useSearchOperations = () => {
  const [searchSourceAccount, setSearchSourceAccount] = useState<
    string | undefined
  >();
  const [searchTransactionType, setSearchTransactionType] = useState<
    string | undefined
  >();
  const [searchTargetAccount, setSearchTargetAccount] = useState<
    string | undefined
  >();

  const { isLoading, data, refetch } = useQueryOPerations({
    sourceAccountNum: searchSourceAccount,
    transactionType: searchTransactionType,
    targetAccountNum: searchTargetAccount,
  });

  return {
    searchSourceAccount,
    setSearchSourceAccount,
    searchTransactionType,
    setSearchTransactionType,
    searchTargetAccount,
    setSearchTargetAccount,
    isLoading,
    data,
    refetch,
  };
};

export default useSearchOperations;
