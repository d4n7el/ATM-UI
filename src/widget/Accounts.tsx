import { CardAccount } from 'src/components/CardAccount';
import { SkeletonAccount } from 'src/components/SkeletonAccount';
import { useQueryAccounts } from '@hooks/useQueryAccounts';

export const AccountList = () => {
  const { isLoading, data, refetch } = useQueryAccounts();

  const handleAccountChange = () => {
    refetch();
  };
  return (
    <div>
      <div>
        <h1 className='text-4xl font-bold mb-4'>List of accounts</h1>
        <span className=' opacity-30 font-thin tracking-wide text-sm'>
          These are all your accounts
        </span>
      </div>
      <section className='flex gap-4 pr-8 mt-10 flex-wrap'>
        {data?.data.map((account) => (
          <CardAccount
            key={account.accountId}
            account={account}
            user={undefined}
            handleAccountChange={handleAccountChange}
          />
        ))}
        {isLoading && <SkeletonAccount items={10} />}
      </section>
    </div>
  );
};
