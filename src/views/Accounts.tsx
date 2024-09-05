import { useParams } from 'react-router-dom';
import { AccountsByUser } from '@widget/AccountsByUser';
import { AccountList } from '@widget/Accounts';

export const Accounts = () => {
  const { userId } = useParams();

  return (
    <div className='container-left'>
      {userId && <AccountsByUser userId={userId} />}
      {!userId && <AccountList />}
    </div>
  );
};
