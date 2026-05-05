
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditTask from '../components/FormEditTask'

const Edit = props => {
  const { idTask } = useParams()
  const [isLoading, setIsLoading] = useState({
	editTask: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit")
  }, []);


useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editTask: true}))
	  setIsLoading(prev => ({...prev, editTask: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={""}
		isLoading={isLoading.editTask}
	>
		<FormEditTask
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default Edit

