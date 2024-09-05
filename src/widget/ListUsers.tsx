import { User } from '@nextui-org/react';
import { useQueryUsers } from '@hooks/useQueryUsers';
import { useNavigate } from 'react-router-dom';
import { SkeletonUser } from 'src/components/SkeletonUser';

export interface Props {
  callback: () => void;
}

export const ListUsers = ({ callback }: Props) => {
  const navigate = useNavigate();
  const { isLoading, data } = useQueryUsers();

  return (
    <section>
      <div>
        <h1 className='text-4xl font-bold mb-4'>List of available users</h1>
      </div>
      <span className=' opacity-30 font-thin tracking-wide text-sm'>
        You are not a member yet ?{' '}
      </span>
      <button
        onClick={callback}
        className='text-slate-100 bg-blue-600 p-1 pl-2 pr-2 ml-7 rounded-lg text-sm'
      >
        See user form
      </button>
      <div className='flex gap-6 mt-10 flex-wrap'>
        {data?.data?.map((user) => (
          <User
            onClick={() => navigate(`/accounts/user/${user.userId}`)}
            key={user.userId}
            className='border-stone-700 border p-2 cursor-pointer'
            name={`${user.firstName} ${user.lastName} (${user.accountCount})`}
            description={user.email}
            avatarProps={{
              src: `https://i.pravatar.cc/150?u=${user.userId}`,
            }}
          />
        ))}
        {isLoading && <SkeletonUser items={10} />}
      </div>
    </section>
  );
};
