import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { useState } from 'react';
import { postTransfer } from '@api/operation.api';
import { useQueryAccounts } from '@hooks/useQueryAccounts';
import { Account } from 'src/models/accounts';
export interface Props {
  sourceAccount: Account;
}
export const TransferFormModal = ({ sourceAccount }: Props) => {
  const [amount, setAmount] = useState<string>('');
  const [targetAccount, setTargetAccount] = useState<string>('');
  const { data } = useQueryAccounts();

  const generateDeposit = async () => {
    if (amount) {
      const data = {
        targetAccountId: targetAccount,
        sourceAccountId: sourceAccount.accountId,
        createByUserId: 39,
        transactionType: 'TRANSFER',
        transactionAmount: amount,
      };

      await postTransfer(data);
    }
  };
  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>
        <h1 className='text-red-700'>Transfer</h1>
        <span className=' text-sm text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ornare sem mi.
        </span>
      </ModalHeader>
      <ModalBody>
        <Input
          onChange={(e) => setAmount(e.target.value)}
          label='Source account'
          isDisabled
          placeholder={`${sourceAccount.accountName} / ${sourceAccount.accountNum}`}
          labelPlacement='outside'
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>$</span>
            </div>
          }
          type='number'
        />
        <Select
          label='Select target account'
          labelPlacement='outside'
          placeholder='Select an animal'
          className='max-w-xs'
          onChange={(e) => {
            setTargetAccount(e.target.value);
          }}
        >
          {(
            data?.data.filter((x) => x.accountId !== sourceAccount.accountId) ||
            []
          ).map((account) => (
            <SelectItem
              key={account.accountId}
              textValue={`${account.accountName} /${account.accountNum}`}
            >
              {account.accountName} / {account.accountNum}
            </SelectItem>
          ))}
        </Select>
        <Input
          onChange={(e) => setAmount(e.target.value)}
          label='Price'
          placeholder='0.00'
          labelPlacement='outside'
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>$</span>
            </div>
          }
          endContent={
            <div className='flex items-center'>
              <label className='sr-only' htmlFor='currency'>
                Currency
              </label>
              <select
                className='outline-none border-0 bg-transparent text-default-400 text-small'
                id='currency'
                name='currency'
              >
                <option>USD</option>
              </select>
            </div>
          }
          type='number'
        />
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={generateDeposit}
          className='text-white'
          color='success'
        >
          Success
        </Button>
      </ModalFooter>
    </>
  );
};
