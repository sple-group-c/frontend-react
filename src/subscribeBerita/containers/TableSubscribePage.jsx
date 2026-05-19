
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import SubscribeCard from "../components/SubscribeCard";

const TableSubscribePage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	listSubscribe: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Subscribe Page")
  }, []);


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listSubscribe: true}))
			} finally {
				setIsLoading(prev => ({...prev, listSubscribe: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"Subscribe"}
	singularName={"Subscribe"}
	items={[]}
	isLoading={isLoading.listSubscribe}
>
	<SubscribeCard
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableSubscribePage

