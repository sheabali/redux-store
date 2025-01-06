import { AddTaskModal } from '@/components/module/tasks/AddTaskModal';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Tasks = () => {
  return (
    <div>
      <div className="flex justify-end items-center my-14">
        <h1 className="mr-auto">Tasks</h1>

        <Tabs defaultValue="all" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5"></div>
    </div>
  );
};

export default Tasks;
