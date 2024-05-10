import React from 'react'

function TaskItem(props) {
    return (
        <div>
            <p>{props.task.title + " " +
                props.task.complete}</p>
            <button
                onClick={() =>
                    props.
                        onComplete(props.task.id)}>
                Complete</button>
        </div>
    )
}

export default TaskItem