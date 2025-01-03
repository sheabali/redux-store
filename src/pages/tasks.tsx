import { selectFilter, selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

 const Tasks = () => {

  const tasks = useAppSelector(selectTasks)
  const filter = useAppSelector(selectFilter)
  console.log(tasks,filter)

  return (
    <div>
      <h1>This is Tasks Components</h1>
    </div>
  );
};

export default Tasks;