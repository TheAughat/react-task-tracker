import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ]
  );

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  

  return (
    <div className="container">
      <Header />
      {(tasks.length > 0)? (<Tasks tasks={tasks} onDelete={deleteTask} />) : 'No tasks to show'}
    </div>


    // const name = 'Leinad';
    // const x = false;
    // <div className="container">
    //   <h1>Hello from React!</h1>
    //   <h2>Hello {name}</h2>
    //   <h2>x is {(x)?'true':'false'}</h2>
    // </div>
  );
}

export default App;
