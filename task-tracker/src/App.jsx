import { useEffect } from "react";
import { useState } from "react"
import TaskList from "./TaskList";
import CompA from "./CompA";
import CompB from "./CompB";

function App() {

  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("no-name")

  useEffect(() => {
    // Simulate fetching tasks
    setTasks([{
      id: 1,
      title: 'Water the plants',
      complete: false
    },
    {
      id: 2,
      title: 'Clean the roads',
      complete: false
    },
    {
      id: 3,
      title: 'Filter the water tanks',
      complete: false
    }])
  }, []);

  const changeName = () => {
    setName("Change-name");
  }

  const handleComplete = (taskId) => {
    const updatedTasks =
      tasks.map(task => task.id === taskId ?
        { ...task, complete: true } : task);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <TaskList tasks={tasks}
        onComplete={handleComplete} />
      <p>{name}</p>
      <button onClick={() => changeName()}>Change</button>
    </div>
  )
}

export default App
