
import React from 'react';
import TableProgrammingProjectPage from './containers/TableProgrammingProjectPage'
import TambahProgrammingProjectPage from './containers/TambahProgrammingProjectPage'
import DetailProjectProgrammingPage from './containers/DetailProjectProgrammingPage'

const programmingProjectRoutes = [
{ 
    path: "/programmingproject",
    element: <TableProgrammingProjectPage />,
  }	
,
{ 
    path: "/programmingproject/tambah",
    element: <TambahProgrammingProjectPage />,
  }	
,
{ 
    path: "",
    element: <DetailProjectProgrammingPage />,
  }	

]

export default programmingProjectRoutes
