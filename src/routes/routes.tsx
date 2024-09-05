import { Route, Routes } from 'react-router-dom';
import { Users } from '@views/Users';
import { Accounts } from '@views/Accounts';
import { Operations } from 'src/views/Operations';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='users' element={<Users />}></Route>
      <Route path='accounts' element={<Accounts />}>
        <Route path='user' element={<Accounts />}>
          <Route path=':userId' element={<Accounts />} />
        </Route>
      </Route>
      <Route path='transactions' element={<Operations />}></Route>
    </Routes>
  );
};
