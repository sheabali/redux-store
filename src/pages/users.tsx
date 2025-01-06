import { AddUserModal } from '@/components/module/users/AddUserModel';
import UserCard from '@/components/module/users/UserCard';
import { selectUser } from '@/redux/features/users/userSlice';
import { useAppSelector } from '@/redux/hook';

const Users = () => {
  const users = useAppSelector(selectUser);

  console.log(users);

  return (
    <div>
      <div className="flex justify-end items-center my-14 ">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal />
      </div>

      <div className="flex justify-start items-center gap-4">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
