import * as React from 'react';
import { Task } from "../types/Task";
import { TaskPriority } from "../types/TaskPriority";


export class CreateTask extends React.Component<CreateTaskProps, CreateTaskState>{
    constructor(props: any) {
        super(props);
        this.state = {
            task: {
                name: '',
                description: '',
                priority: 'Medium',
            },
            taskCreated: false
        }
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.state.task.name} onChange={this.updateName.bind(this)} />
                    <input value={this.state.task.description} onChange={this.updateDescription.bind(this)} />
                    <select
                        onChange={this.updatePriority.bind(this)}
                        value={this.state.task.priority}
                    >
                        <option value="Very_High">Very_High</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        <option value="Very_Low">Very_Low</option>
                    </select>
                    <button onClick={this.createTask.bind(this)}>Create Task</button>
                </div>
                <div>
                    {(() => {
                        if (this.state.taskCreated) {
                            return (
                                <div>
                                    <h3>{this.state.task.name}</h3>
                                    <h4>{this.state.task.description}</h4>
                                    <h5>{this.state.task.priority}</h5>

                                </div>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }

    updateName(event: React.FormEvent<HTMLInputElement>) {
        let task = this.state.task;
        task.name = event.currentTarget.value;
        this.setState({
            task
        });
    }
    updateDescription(event: React.FormEvent<HTMLInputElement>) {
        let task = this.state.task;
        task.description = event.currentTarget.value;
        this.setState({
            task
        });
    }
    updatePriority(event: React.FormEvent<HTMLSelectElement>) {
        let task = this.state.task;
        task.priority = event.currentTarget.value as TaskPriority;
        this.setState({
            task
        });
    }

    createTask(event: React.FormEvent<HTMLButtonElement>) {
        let task = this.state.task;
        task.dateCreated = new Date()
        this.setState({ taskCreated: true, task });
        console.log("on click");

    }
}

type CreateTaskProps = {};
type CreateTaskState = {
    task: Task,
    taskCreated: boolean
};
