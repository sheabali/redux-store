import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

 const Tasks = () => {

  const tasks = useAppSelector(selectTasks)
  const filter = useAppSelector(selectFilter)
  console.log(tasks,filter)

  return (
    <div>
        <div className="flex justify-between items-center my-14">
          <h1>Tasks</h1>
          <AddTaskModal/>
        </div>
     <div className="space-y-5 mt-5">
      {tasks.map((task) => <TaskCard task={task} key={task.id}/>)}
      </div>
    </div>
  );
};

export default Tasks;