
import React from 'react';
import TableEmailReminderPage from './containers/TableEmailReminderPage'
import AddEmailReminderPage from './containers/AddEmailReminderPage'

const emailReminderRoutes = [
{ 
    path: "/emailreminder",
    element: <TableEmailReminderPage />,
  }	
,
{ 
    path: "/emailreminder/add",
    element: <AddEmailReminderPage />,
  }	

]

export default emailReminderRoutes
