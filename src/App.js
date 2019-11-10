import React, { useState } from 'react';
import './App.scss';
import TobBar from './components/topBar/TopBar';
import EditorPanel from './components/main/editorPanel/EditorPanel';
import Main from './components/main/Main';

const tasksState = [
    { id: 1, text: 'Buy salad', completed: false },
    { id: 2, text: 'Brush teeth ', completed: false },
    { id: 3, text: 'Uncompleted task', completed: false },
    { id: 4, text: 'Completed task', completed: true }
];

function App() {
    const [tasks, setTasks] = useState(tasksState);
    function handleComplete(id) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return (
        <React.Fragment>
            <TobBar />
            <Main>
                <EditorPanel tasks={tasks} onTaskComplete={handleComplete} />
            </Main>
        </React.Fragment>
    );
}

export default App;
