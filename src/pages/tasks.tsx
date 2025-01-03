import TaskCard from "@/components/module/taskCard";
import { selectFilter, selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

 const Tasks = () => {

  const tasks = useAppSelector(selectTasks)
  const filter = useAppSelector(selectFilter)
  console.log(tasks,filter)

  return (
    <div>
        <div>
          <h1>Tasks</h1>
        </div>
     <div className="space-y-5 mt-5">
      {tasks.map((task) => <TaskCard task={task}/>)}
      </div>
    </div>
  );
};

export default Tasks;