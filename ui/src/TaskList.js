import './TaskList.css';
import { useEffect, useState } from 'react';
import { Card, Checkbox, Fab, TextField, Button } from '@material-ui/core';
import { findAllDone, findAllPending, setAsDone, setAsPending, save } from './task-service';
import AddIcon from '@material-ui/icons/Add';

export function TaskList({done}) {

    const [tasks, setTasks] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [title, setTitle] = useState(null);

    async function findAll() {
        if (done) {
            const doneTasks = await findAllDone();
            setTasks(doneTasks);
        } else {
            const pendingTasks = await findAllPending();
            setTasks(pendingTasks);
        }
    }

    useEffect(async () => {
        await findAll();
    }, []);

    async function onChange(target, task) {
        if (target.checked) {
            await setAsDone(task);
        } else {
            await setAsPending(task);
        }
        await findAll();
    }

    function onClickToAdd() {
        console.log('rolou');
        setIsAdding(true);
    }

    async function onSave() {
        await save({
            title,
            done: false,
        });
        setIsAdding(false);
        await findAll();
    }

    return (
        <>
            <ul>
                {tasks.filter(task => task.done === done).map(task => {
                    return (
                        <Card className={'item-list-card'} key={task.id}>
                            <Checkbox checked={task.done} value={task.id} onChange={({target}) => onChange(target, task)}/>
                            {task.title} 
                        </Card>
                    )
                })}

                {isAdding && <Card className={'item-list-card'} key={0}>
                                <TextField
                                        autoFocus
                                        margin="dense"
                                        id="description"
                                        label="Description"
                                        type="text"
                                        fullWidth
                                        onChange={(event) => setTitle(event.target.value)}
                                    />
                                    <Button onClick={() => setIsAdding(false)} variant="contained" color="secondary">
                                        Cancel
                                    </Button>
                                    <Button onClick={() => onSave()} variant="contained" color="primary">
                                        Submit
                                    </Button>
                            </Card>
                        }

            </ul>

            

            {!done && <Fab onClick={onClickToAdd} className={'fab-button'} color="primary" aria-label="Add"><AddIcon/></Fab>}
        </>

    );
}