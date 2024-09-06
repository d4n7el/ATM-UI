import { Input, Select, SelectItem } from '@nextui-org/react';

export interface Props {
  changeSourceAccountNum: (sourceAccountNum: string) => void;
  changeTargetAccountNum: (sourceAccountNum: string) => void;
  changeTransactionType: (sourceAccountNum: string) => void;
}

export const FilterOperations = ({
  changeSourceAccountNum,
  changeTargetAccountNum,
  changeTransactionType,
}: Props) => {
  return (
    <div className='mt-14 flex gap-4'>
      <Select
        label='Select target account'
        labelPlacement='outside'
        placeholder='Select a transaction type'
        className='max-w-xs'
        onChange={(e) => {
          changeTransactionType(e.target.value);
        }}
      >
        <SelectItem textValue='DEPOSIT' key='DEPOSIT'>
          DEPOSIT
        </SelectItem>
        <SelectItem textValue='WITHDRAWAL' key='WITHDRAWAL'>
          WITHDRAWAL
        </SelectItem>
        <SelectItem textValue='TRANSFER' key='TRANSFER'>
          TRANSFER
        </SelectItem>
      </Select>
      <Input
        className='w-[300px]'
        onChange={(e) => changeSourceAccountNum(e.target.value)}
        label='Source Account Num'
        placeholder='Account Num'
        labelPlacement='outside'
        startContent={
          <div className='pointer-events-none flex items-center'>
            <span className='icon-[mdi--account-credit-card]'></span>
          </div>
        }
        endContent={
          <div className='flex items-center'>
            <span className='icon-[lets-icons--search]'></span>
          </div>
        }
        type='text'
      />
      <Input
        className='w-[300px]'
        onChange={(e) => changeTargetAccountNum(e.target.value)}
        label='Target Account Num'
        placeholder='Account Num'
        labelPlacement='outside'
        startContent={
          <div className='pointer-events-none flex items-center'>
            <span className='icon-[mdi--account-credit-card]'></span>
          </div>
        }
        endContent={
          <div className='flex items-center'>
            <span className='icon-[lets-icons--search]'></span>
          </div>
        }
        type='text'
      />
    </div>
  );
};
