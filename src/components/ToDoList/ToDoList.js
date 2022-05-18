import React, {} from 'react';
import './ToDoList.css'

const ToDoList = () => {

    const handleSubmit =  (e) => {
        e.preventDefault();

        const task = e.target.task.value;
        const description = e.target.description.value;
        console.log(task , description);
        const url = 'http://localhost:5000/todo';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res=>res.json())
        

        e.target.reset(' ')
    }
        return (
            <div className='todo '>
                <h2 className='text-primary text-center mt-5 mb-3'>What to Do... </h2>
                
                <form onSubmit={handleSubmit} >
                    <input type="text" name="task" id="" placeholder='Task Name' required />

                    <input type="textarea" name="description" id="" placeholder='Enter what to do' required />

                    <input

                        className='w-100 mx-auto btn btn-primary mt-2'
                        type="submit"
                        value="Add Task" />

                </form>
            </div>
        );
    };

    export default ToDoList;