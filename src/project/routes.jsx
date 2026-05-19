
import React from 'react';
import TableProjectPage from './containers/TableProjectPage'
import TambahProjectPage from './containers/TambahProjectPage'
import DetailProjectPage from './containers/DetailProjectPage'

const projectRoutes = [
{ 
    path: "/project",
    element: <TableProjectPage />,
  }	
,
{ 
    path: "/project/tambah",
    element: <TambahProjectPage />,
  }	
,
{ 
    path: "/project/:idProject",
    element: <DetailProjectPage />,
  }	

]

export default projectRoutes
