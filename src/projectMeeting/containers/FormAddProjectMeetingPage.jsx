
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormModifiedForm from '../components/ModifiedFormModifiedForm'

const FormAddProjectMeetingPage = props => {
  const [isLoading, setIsLoading] = useState({
	modifiedForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Form Add Project Meeting Page")
  }, []);

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Form"}
		
	>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default FormAddProjectMeetingPage

