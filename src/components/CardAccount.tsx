import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Divider,
  Button,
  Tooltip,
} from '@nextui-org/react';
import { Account, User } from '@models/accounts';
import { ModalView } from './ModalView';
import { useEffect, useState } from 'react';
import { DepositFormModal } from '@components/DepositFormModal';
import { WithdrawalFormModal } from '@components/WithdrawalFormModal';
import { TransferFormModal } from './TransferFormModal';

export interface Props {
  account: Account;
  user: User | undefined;
  handleAccountChange: () => void;
}

export const CardAccount = ({ account, user, handleAccountChange }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [contentModal, setContentModal] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (contentModal) setOpenModal(true);
  }, [contentModal]);

  return (
    <>
      <Card className='max-w-[540px]'>
        <CardHeader className='justify-between'>
          <div className='flex gap-5'>
            <Avatar
              isBordered
              radius='full'
              size='md'
              src={`https://i.pravatar.cc/150?u=${account.userId}`}
            />
            <div className='flex flex-col gap-1 items-start justify-center'>
              <h4 className='text-small font-semibold leading-none text-default-600'>
                {account.accountName}
              </h4>
              <h5 className='text-small tracking-tight text-default-400'>
                @{account.accountNum}
              </h5>
            </div>
          </div>
        </CardHeader>

        <CardBody className='px-3 py-0 text-small text-default-400'>
          {user && (
            <span className='pt-2'>
              Email: {user.email}
              <span className='py-2 ml-2' aria-label='computer' role='img'>
                💻
              </span>
            </span>
          )}
          <div className='flex gap-1'>
            <p className=' text-default-400 text-small'>Current Balance:</p>
            <p className='font-semibold text-blue-500  text-small'>
              {account.currentBalance}
            </p>
          </div>
        </CardBody>

        <CardFooter className='gap-3 flex flex-wrap'>
          <Divider orientation='horizontal' />
          <Tooltip content='Deposit' color='success'>
            <Button
              onClick={() => {
                setContentModal(
                  <DepositFormModal sourceAccountId={account.accountId} />
                );
              }}
              size='sm'
              variant='light'
              color='success'
              isIconOnly
              aria-label='Like'
            >
              <span className='icon-[majesticons--money-plus-line] size-5'></span>
            </Button>
          </Tooltip>
          <Tooltip content='Withdrawal' color='danger'>
            <Button
              onClick={() => {
                setContentModal(
                  <WithdrawalFormModal sourceAccountId={account.accountId} />
                );
              }}
              size='sm'
              variant='light'
              isIconOnly
              color='danger'
              aria-label='Take a photo'
            >
              <span className='icon-[majesticons--money-minus-line] size-5'></span>
            </Button>
          </Tooltip>
          <Tooltip content='Transfer' color='warning'>
            <Button
              onClick={() => {
                setContentModal(<TransferFormModal sourceAccount={account} />);
              }}
              size='sm'
              variant='light'
              isIconOnly
              color='warning'
              aria-label='Take a photo'
            >
              <span className='icon-[hugeicons--money-send-square] size-5'></span>
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
      <ModalView
        isOpen={openModal}
        callback={() => {
          handleAccountChange();
          setOpenModal(false);
        }}
        modalContent={contentModal}
      ></ModalView>
    </>
  );
};
