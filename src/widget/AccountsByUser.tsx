import { useQueryAccountsByUser } from '@hooks/useQueryAccountsByUser';
import { useState } from 'react';
import { CardAccount } from '@components/CardAccount';
import { SkeletonAccount } from '@components/SkeletonAccount';
import { FormNewAccount } from '@widget/FormNewAccount';
export interface Props {
  userId: string;
}
export const AccountsByUser = ({ userId }: Props) => {
  const { isLoading, data, refetch } = useQueryAccountsByUser(userId);
  const [showFormAccount, setShowFormAccount] = useState(true);

  const handleAccountChange = () => {
    refetch();
  };

  return (
    <div>
      <div>
        <h1 className='text-4xl font-bold mb-4'>
          {showFormAccount ? 'New Account' : 'List of accounts'}
        </h1>
        <span className=' opacity-30 font-thin tracking-wide text-sm'>
          These are all your accounts
        </span>
        <button
          className='text-slate-100 bg-blue-600 p-1 pl-2 pr-2 ml-7 rounded-lg text-sm'
          onClick={() => {
            setShowFormAccount(!showFormAccount);
          }}
        >
          {showFormAccount
            ? `Show list accounts (${data?.data.accounts.length})`
            : 'Add new account'}
        </button>
      </div>
      {!showFormAccount && (
        <section className='flex gap-4 pr-8 mt-10'>
          {data?.data.accounts.map((account) => (
            <CardAccount
              key={account.accountId}
              account={account}
              user={data?.data.user}
              handleAccountChange={handleAccountChange}
            />
          ))}

          {isLoading && <SkeletonAccount items={10} />}
        </section>
      )}
      {showFormAccount && (
        <FormNewAccount
          userId={userId}
          handleAccountChange={handleAccountChange}
        />
      )}
    </div>
  );
};
