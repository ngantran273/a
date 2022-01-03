import Text from "./component/Text";
import Task from './component/Task';
import React, {useState} from "react";
// import Calender from "./component/Calender/Calender";
// import Demo from './component/Calender/Demo'
// import Calendar from "./component/Shedule/Calendar";
import Test from './Test'

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: 'tui là thỏ',
      day: '21/11 sáng',
      reminder: true,
  },
  {
      id: 2,
      text: 'là thỏ thì cho xem tai',
      day: '21/11 chiều',
      reminder: true,
  },
  {
      id: 3,
      text: 'còn nai thì sao z',
      day: '22/11 sáng',
      reminder: true,
  }

  ])

  // delete Task

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id))
  }

  return (
    <div>
      
      <Text/>
      <Task task={task} onDelete={deleteTask}/>
      {/* <Calender/> */}
      {/* <Demo/> */}
      {/* <Calendar/> */}
      <Test/>
    </div>
  );
}

export default App;
