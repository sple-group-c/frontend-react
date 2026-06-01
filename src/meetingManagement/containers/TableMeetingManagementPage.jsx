
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MeetingTable from "../components/MeetingTable";
import getListMeetingManagement from '../services/getListMeetingManagement'

const TableMeetingManagementPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableMeetingManagement: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Meeting Management Page")
  }, []);


const [listMeetingManagement, setListMeetingManagement] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMeetingManagement: true}))
				const { data: listMeetingManagement } = await getListMeetingManagement()
				setListMeetingManagement(listMeetingManagement.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMeetingManagement: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/meeting-management/add
			  	`}>
			  		<Button id="_6uVucF2-EfGWHr40AZXkdg" className="p-2" variant="primary">
			  		  Tambah
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Meeting Management"}
	singularName={"Meeting"}
	items={[listMeetingManagement]}
	isLoading={isLoading.tableMeetingManagement}
>
	<MeetingTable
		listMeetingManagement={listMeetingManagement}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableMeetingManagementPage

