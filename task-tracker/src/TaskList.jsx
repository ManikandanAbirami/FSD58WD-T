import React from 'react'
import TaskItem from './TaskItem'
import { useState } from 'react';

function TaskList(props) {
    const [name, setName] = useState("No name");
    const displayName = (name) => {
        setName(name);
    }
    return (
        <div>
            {props.tasks.map(task => (
                <TaskItem key={task.id}
                    task={task}
                    onComplete=
                    {props.onComplete}
                    displayName={displayName} />
            ))}
        </div>
    )
}

export default TaskList