import { Button } from '@/components/ui/button';
import { removeUser } from '@/redux/features/users/userSlice';
import { useAppDispatch } from '@/redux/hook';
import { IUser } from '@/types';
import { Trash2 } from 'lucide-react';

interface IProps {
  user: IUser;
}
const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-[300px] space-y-5 mt-5 border rounded-md px-5 py-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>{user.name}</h1>
        </div>
        <div>
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
