
import React from 'react';
import TableProjectMeetingPage from './containers/TableProjectMeetingPage'
import FormAddProjectMeetingPage from './containers/FormAddProjectMeetingPage'

const projectMeetingRoutes = [
{ 
    path: "/project-meeting",
    element: <TableProjectMeetingPage />,
  }	
,
{ 
    path: "/project-meeting/add",
    element: <FormAddProjectMeetingPage />,
  }	

]

export default projectMeetingRoutes
