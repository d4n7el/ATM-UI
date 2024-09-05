import { useMutation } from '@tanstack/react-query';
import { postUser } from '@api/user.api';

export const useQueryUserCreate = () => {
  const mutation = useMutation({
    mutationFn: (data: any) => postUser(data),
  });

  return mutation;
};
