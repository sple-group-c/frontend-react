
import React from 'react';
import BeritaList from './containers/BeritaList'
import AddBerita from './containers/AddBerita'
import Edit from './containers/Edit'

const beritaBoardRoutes = [
{
    path: "/berita",
    element: <BeritaList />,
  }
,
{
    path: "/berita/tambah",
    element: <AddBerita />,
  }
,
{
    path: "",
    element: <Edit />,
  }

]

export default beritaBoardRoutes
