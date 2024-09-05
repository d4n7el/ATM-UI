import { Button, DateInput, DateValue, Input } from '@nextui-org/react';
import { useState } from 'react';
import { UserPost } from 'src/models/user';
import { postUser } from '@api/user.api';
export interface Props {
  callback: () => void;
}
export const FormUser = ({ callback }: Props) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dob, setDob] = useState<DateValue>();

  const sendForm = async () => {
    const formData: UserPost = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      dateOfBirth: new Date(`${dob?.year}/${dob?.day}/${dob?.month}`),
    };
    await postUser(formData);
  };

  return (
    <section>
      <div>
        <h1 className='text-4xl font-bold mb-4'>Create new user</h1>
      </div>

      <span className=' opacity-30 font-thin tracking-wide text-sm'>
        Already A Member ?{' '}
      </span>
      <button
        onClick={callback}
        className='text-slate-100 bg-blue-600 p-1 pl-2 pr-2 ml-7 rounded-lg text-sm'
      >
        See user list
      </button>
      <div className='flex gap-4 mt-10'>
        <Input
          isRequired
          type='text'
          label='Firs Name'
          placeholder='John'
          className='max-w-xs'
          classNames={{
            inputWrapper: ['input-wrapper-test-bank'],
          }}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          isRequired
          type='text'
          label='Last Name'
          placeholder='Doe'
          className='max-w-xs'
          classNames={{
            inputWrapper: ['input-wrapper-test-bank'],
          }}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='mt-6'>
        <Input
          isRequired
          type='email'
          label='Email'
          placeholder='john-doe@nextui.org'
          className=''
          classNames={{
            inputWrapper: ['input-wrapper-test-bank'],
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='flex w-full flex-wrap md:flex-nowrap gap-4  mt-6'>
        <DateInput
          label={'Birth date'}
          isRequired
          classNames={{
            inputWrapper: ['input-wrapper-test-bank'],
          }}
          onChange={setDob}
        />
      </div>
      <div className='flex gap-4 mt-6'>
        <Button
          onClick={callback}
          color='primary'
          variant='faded'
          className='w-[50%]'
        >
          List Users
        </Button>
        <Button
          onClick={sendForm}
          color='primary'
          variant='solid'
          className='w-[50%]'
        >
          Save User
        </Button>
      </div>
    </section>
  );
};
