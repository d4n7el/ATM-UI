import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { postCreateAccount } from '@api/account.api';

export interface Props {
  userId: string;
  handleAccountChange: () => void;
}

export const FormNewAccount = ({ userId, handleAccountChange }: Props) => {
  const [accountName, setAccountName] = useState<string>('');
  const [accountNum, setAccountNum] = useState<string>('');

  const saveAccount = async () => {
    const data = {
      userId: userId,
      accountName,
      accountNum,
    };
    await postCreateAccount(data);
    handleAccountChange();
  };

  return (
    <section>
      <div className='flex gap-4 mt-10'>
        <Input
          isRequired
          type='text'
          label='Account Name'
          placeholder='BBVA'
          className='max-w-xs'
          classNames={{
            inputWrapper: ['input-wrapper-test-bank'],
          }}
          onChange={(e) => setAccountName(e.target.value)}
        />
        <Input
          isRequired
          type='text'
          label='Account Num'
          placeholder='15676543'
          className='max-w-xs'
          classNames={{
            inputWrapper: ['input-wrapper-test-bank'],
          }}
          onChange={(e) => setAccountNum(e.target.value)}
        />
      </div>
      <div className='flex justify-end gap-4 mt-6'>
        <Button
          onClick={saveAccount}
          color='primary'
          variant='faded'
          className='w-[50%]'
        >
          Save account
        </Button>
      </div>
    </section>
  );
};
