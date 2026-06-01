
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEmailReminderForm from '../components/ModifiedFormEmailReminderForm'
import getTaskList from '../services/getTaskList'

const AddEmailReminderPage = props => {
  const [isLoading, setIsLoading] = useState({
	emailReminderForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Email Reminder Page")
  }, []);


const [taskList, setTaskList] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, emailReminderForm: true}))
      const { data: taskListResponse } = await getTaskList({  })

	  setTaskList(taskListResponse.data)
	  setIsLoading(prev => ({...prev, emailReminderForm: false}))
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
		singularName={"Reminder"}
		isLoading={isLoading.emailReminderForm}
	>
		{taskList ? 
		(<>
		 <ModifiedFormEmailReminderForm
			{...{ 
				taskList
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddEmailReminderPage

