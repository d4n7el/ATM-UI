import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { useState } from 'react';
import { postWithdrawal } from '@api/operation.api';

export interface Props {
  sourceAccountId: number;
}

export const WithdrawalFormModal = ({ sourceAccountId }: Props) => {
  const [amount, setAmount] = useState<string>('');
  const generateDeposit = async () => {
    if (amount) {
      const data = {
        sourceAccountId: sourceAccountId,
        createByUserId: 39,
        transactionType: 'WITHDRAWAL',
        transactionAmount: amount,
      };

      await postWithdrawal(data);
    }
  };
  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>
        <h1 className='text-red-700'>Withdrawal</h1>
        <span className=' text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ornare sem mi.
        </span>
      </ModalHeader>
      <ModalBody>
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
