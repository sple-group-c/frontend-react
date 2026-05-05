
import React from 'react';
import TaskList from './containers/TaskList'
import AddTask from './containers/AddTask'
import Edit from './containers/Edit'

const taskManagementRoutes = [
{ 
    path: "/task",
    element: <TaskList />,
  }	
,
{ 
    path: "/task/tambah",
    element: <AddTask />,
  }	
,
{ 
    path: "",
    element: <Edit />,
  }	

]

export default taskManagementRoutes
