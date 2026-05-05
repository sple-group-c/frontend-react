
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddBerita from '../components/FormAddBerita'

const AddBerita = props => {
  const [isLoading, setIsLoading] = useState({
	addBerita: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("AddBerita")
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
		singularName={""}

	>
		<FormAddBerita
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddBerita
