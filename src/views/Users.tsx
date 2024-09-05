import { FormUser } from '@widget/FormUser';
import { ListUsers } from '@widget/ListUsers';
import { useState } from 'react';

export const Users = () => {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className='container-left'>
      {showForm && <FormUser callback={() => setShowForm(!showForm)} />}
      {!showForm && <ListUsers callback={() => setShowForm(!showForm)} />}
    </div>
  );
};
