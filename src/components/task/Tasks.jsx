/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { allTasks } from "../../services/task/getallTasks";
import { useDispatch, useSelector } from "react-redux";
import { setTask, updateTask } from "../../redux/slice/taskSlice";
import { addTasks } from "../../services/task/addTask";
import { deleteTasks } from "../../services/task/deleteTask";
import { updateTaskStatus } from "../../services/task/updateStatus";
import Navbar from "./Navbar";

const Tasks = () => {
    // const [formData, setFormData] = useState({
    //     title: "",
    //     description: "",
    //     status: "",
    // });
    const dispatch = useDispatch();

    const [tasks, setTasks] = useState([]);

    const userId = useSelector((state) => state?.user?.data[0]?._id);

    async function getAlltasks(userId) {
        const response = await allTasks(userId);
        return response;
    }

    useEffect(() => {
        const fetchtasks = async () => {
            try {
                const response = await getAlltasks(userId);
                setTasks(response.data.tasks);
                dispatch(setTask(response.data.tasks));
            } catch (error) {}
        };
        fetchtasks();
    }, []);

    const [newTask, setNewTask] = useState("");

    // Handle Status Change
    const handleStatusChange = async (taskId, newStatus) => {
        try {
            // API call to update status
            const updatedTask = await updateTaskStatus(taskId, newStatus);
    
            // Update local state
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task?._id === taskId ? { ...task, status: newStatus } : task))
            );
    
            // Dispatch to Redux
            dispatch(updateTask(updatedTask));
        } catch (error) {
            console.error("Error updating task status:", error);
        }
    };

    // Handle Task Deletion
    const handleDelete = async (taskId) => {
        try {
            await deleteTasks(taskId);

            setTasks((prevTasks) => prevTasks.filter((task) => task?._id !== taskId));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    // Handle Add New Task

    const handleAddTask = async () => {
        if (newTask.trim() === "") return;

        const newTaskObj = {
            userId,
            title: newTask,
            description: "",
            status: "pending",
        };

        try {
            const response = await addTasks(newTaskObj);
            const savedTask = response.data;

            setTasks((tasks) => [...tasks, savedTask]);
            setNewTask("");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Header */}
            <h1 className="text-3xl font-bold text-center mb-6">My To-Do List</h1>

            {/* Add Task */}
            <div className="flex items-center justify-center mb-6">
                <input
                    type="text"
                    className="border rounded-lg px-4 py-2 w-2/3 md:w-1/3 mr-2"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>

            {/* Task List */}
            <div className="bg-white shadow-md rounded-lg p-4">
                {tasks.length === 0 ? (
                    <p className="text-center text-gray-500">No tasks available</p>
                ) : (
                    <ul>
                        {tasks?.map((task,index) => (
                            <li key={index} className="flex items-center justify-between p-4 border-b last:border-b-0">
                                <div  className="flex items-center">
                                    <span className="text-lg font-medium">{task.title}</span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    {/* Status Selector */}
                                    <select
                                        className="border rounded-lg px-2 py-1"
                                        value={task.status}
                                        onChange={(e) => handleStatusChange(task?._id, e.target.value)}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </select>

                                    {/* Delete Icon */}
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(task?._id)}
                                    >
                                        ❌
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        </>
    );
};

export default Tasks;
