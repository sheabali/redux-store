import { AddTaskModal } from '@/components/module/tasks/AddTaskModal';
import TaskCard from '@/components/module/tasks/TaskCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  selectFilter,
  selectTasks,
  updateTask,
} from '@/redux/features/tasks/taskSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

const Tasks = () => {
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks, filter);

  return (
    <div>
      <div className="flex justify-end items-center my-14">
        <h1 className="mr-auto">Tasks</h1>

        <Tabs defaultValue="all" className="w-[500px]">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateTask('all'))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateTask('low'))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateTask('medium'))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateTask('high'))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
