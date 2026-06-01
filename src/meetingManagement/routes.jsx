
import React from 'react';
import TableMeetingManagementPage from './containers/TableMeetingManagementPage'
import AddMeetingPage from './containers/AddMeetingPage'

const meetingManagementRoutes = [
{ 
    path: "/meeting-management",
    element: <TableMeetingManagementPage />,
  }	
,
{ 
    path: "/meeting-management/add",
    element: <AddMeetingPage />,
  }	

]

export default meetingManagementRoutes
