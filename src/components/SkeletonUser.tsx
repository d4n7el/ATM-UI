import { Skeleton } from '@nextui-org/react';

export interface Props {
  items: number;
}

export const SkeletonUser = ({ items }: Props) => {
  const itemsSkeleton = Array.from(Array(items).keys());
  return itemsSkeleton.map((item) => (
    <div className='max-w-[300px] w-full flex items-center gap-3' key={item}>
      <div>
        <Skeleton className='flex rounded-full w-12 h-12' />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <Skeleton className='h-3 w-3/5 rounded-lg' />
        <Skeleton className='h-3 w-4/5 rounded-lg' />
      </div>
    </div>
  ));
};
