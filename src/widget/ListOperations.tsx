import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from '@nextui-org/react';
import { useQueryOPerations } from '@hooks/useQueryOperations';
import { colors, transactionTypes } from 'src/models/operations';

export const ListOperations = () => {
  const { isLoading, data } = useQueryOPerations();

  const getColorChip = (transactionType: transactionTypes): colors => {
    if (transactionType === 'DEPOSIT') return 'success';
    if (transactionType === 'WITHDRAWAL') return 'danger';
    if (transactionType === 'TRANSFER') return 'warning';
    return 'primary';
  };

  return (
    <div className='container-left'>
      <section>
        <div>
          <h1 className='text-4xl font-bold mb-4'>List of transfers</h1>
          <span className=' opacity-30 font-thin tracking-wide text-sm'>
            These are all the transactions
          </span>
        </div>
        <div className=' mt-10'>
          {!isLoading && (
            <Table
              aria-label='Example static collection table'
              className='max-h-[590px]'
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
                    <TableCell>{operation.sourceAccountName}</TableCell>
                    <TableCell>{operation.targetAccountName}</TableCell>
                    <TableCell>{operation.createdAt.toString()}</TableCell>
                    <TableCell>
                      <Chip
                        className='capitalize'
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
