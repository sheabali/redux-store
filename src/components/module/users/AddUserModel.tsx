import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch } from '@/redux/hook';
import { IUser } from '@/types';
import { addUser } from '@/redux/features/users/userSlice';

export function AddUserModal() {
  const form = useForm();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    dispatch(addUser(data as IUser));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription className="sr-only">
            Fill up this form.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className=" space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type user name."
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button className="mt-5" type="submit">
                Add User
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
