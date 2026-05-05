
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditBerita from '../components/FormEditBerita'

const Edit = props => {
  const { idBerita } = useParams()
  const [isLoading, setIsLoading] = useState({
	editBerita: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit")
  }, []);


useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editBerita: true}))
	  setIsLoading(prev => ({...prev, editBerita: false}))
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
		isLoading={isLoading.editBerita}
	>
		<FormEditBerita
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default Edit
