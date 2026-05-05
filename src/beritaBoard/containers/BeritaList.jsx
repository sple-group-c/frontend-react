
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import Card from "../components/invalidCard";
import getBeritaData from '../services/getBeritaData'

const BeritaList = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	list: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("BeritaList")
  }, []);


const [beritaData, setBeritaData] = useState()


useEffect(() => {

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, list: true}))
				const { data: beritaData } = await getBeritaData()
				setBeritaData(beritaData.data)
			} finally {
				setIsLoading(prev => ({...prev, list: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/berita/tambah
			  	`}>
			  		<Button id="_7Rtt0EBdEfG_EbYrkoLnzw" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>

			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List"}
	singularName={""}
	items={[beritaData]}
	isLoading={isLoading.list}
>
	<invalidCard
		beritaData={beritaData}

  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BeritaList
