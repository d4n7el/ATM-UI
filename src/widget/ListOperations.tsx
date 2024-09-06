import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from '@nextui-org/react';
import { colors, transactionTypes } from 'src/models/operations';
import { useEffect } from 'react';
import { FilterOperations } from '@components/FilterOperations';
import useSearchOperations from '@hooks/useSearchOperations';
import { format } from '@formkit/tempo';

export const ListOperations = () => {
  const {
    searchSourceAccount,
    setSearchSourceAccount,
    searchTransactionType,
    setSearchTransactionType,
    searchTargetAccount,
    setSearchTargetAccount,
    isLoading,
    data,
    refetch,
  } = useSearchOperations();

  useEffect(() => {
    refetch();
  }, [searchSourceAccount, searchTransactionType, searchTargetAccount]);

  const getColorChip = (transactionType: transactionTypes): colors => {
    if (transactionType === 'DEPOSIT') return 'success';
    if (transactionType === 'WITHDRAWAL') return 'danger';
    if (transactionType === 'TRANSFER') return 'warning';
    return 'primary';
  };

  return (
    <div className='container-left flex-wrap'>
      <section>
        <div>
          <h1 className='text-4xl font-bold mb-4'>List of transfers</h1>
          <span className=' opacity-30 font-thin tracking-wide text-sm'>
            These are all the transactions
          </span>
        </div>
        <FilterOperations
          changeSourceAccountNum={(account) => setSearchSourceAccount(account)}
          changeTargetAccountNum={(account) => setSearchTargetAccount(account)}
          changeTransactionType={(type) => setSearchTransactionType(type)}
        />
        <div className=' mt-10'>
          {!isLoading && (
            <Table
              aria-label='Example static collection table'
              className='max-h-[590px] min-h-[590px]'
              isHeaderSticky={true}
            >
              <TableHeader>
                <TableColumn>Source Account</TableColumn>
                <TableColumn>Target Account</TableColumn>
                <TableColumn>Transaction Date</TableColumn>
                <TableColumn>Transaction Type</TableColumn>
                <TableColumn>Transaction Amount</TableColumn>
                <TableColumn>Previous Balance</TableColumn>
                <TableColumn>Final Balance</TableColumn>
                <TableColumn>Create By</TableColumn>
              </TableHeader>
              <TableBody>
                {(data?.data || []).map((operation) => (
                  <TableRow key={operation.operationId}>
                    <TableCell>
                      {operation.sourceAccountName} /{' '}
                      {operation.sourceAccountNum}{' '}
                    </TableCell>
                    <TableCell>
                      {operation.targetAccountName} /{' '}
                      {operation.targetAccountNum}
                    </TableCell>
                    <TableCell>
                      {format(operation.createdAt.toString(), 'full')}
                    </TableCell>
                    <TableCell>
                      <Chip
                        className='capitalize bg-balck border border-gray-400'
                        color={getColorChip(operation.transactionType)}
                        size='sm'
                        variant='flat'
                      >
                        {operation.sourceAccountName &&
                        operation.targetAccountName &&
                        operation.transactionType === 'DEPOSIT'
                          ? `TRANSFER / ${operation.transactionType}`
                          : operation.transactionType}
                      </Chip>
                    </TableCell>
                    <TableCell>{operation.transactionAmount}</TableCell>
                    <TableCell>{operation.previousBalance}</TableCell>
                    <TableCell>{operation.finalBalance}</TableCell>
                    <TableCell>{operation.createBy.firstName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </section>
    </div>
  );
};
