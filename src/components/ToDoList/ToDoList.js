import React, {} from 'react';
import './ToDoList.css'
import { useForm } from 'react-hook-form';

const ToDoList = () => {

    const { register,  handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/tasks';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            const url = 'http://localhost:5000/todo';
           fetch (url)
           .then(res=>res.json())
           .then(result=>{})
           
           
        })
  
    }
        return (
            <div className='todo '>
                <h2 className='text-primary text-center mt-5 mb-3'>What to Do... </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input type="text" name="task" id="" placeholder='Task Name' required 
                    {...register("task", {
                        required: {
                            value: true,
                            message: 'Task is Required'
                        }
                    })} />

                    <input type="textarea" name="description" id="" placeholder='Enter what to do' required 
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}/>

                    <input

                        className='w-100 mx-auto btn btn-primary mt-2'
                        type="submit"
                        value="Add Task" />

                </form>
            </div>
        );
    };

    export default ToDoList;