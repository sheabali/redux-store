import { AddUserModal } from '@/components/module/users/AddUserModel';

const Users = () => {
  return (
    <div>
      <div className="flex justify-end items-center my-14 ">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal />
      </div>

      <div className="flex justify-start items-center gap-4"></div>
    </div>
  );
};

export default Users;
