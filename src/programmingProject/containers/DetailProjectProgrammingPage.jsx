
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailProjectProgramming from '../components/DetailProjectProgramming'
import getDetailProjectProgramming from '../services/getDetailProjectProgramming'

const DetailProjectProgrammingPage = props => {
  const { idProject } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailProjectProgramming: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail ProjectProgramming Page")
  }, []);


const [detailProjectProgramming, setDetailProjectProgramming] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailProjectProgramming: true}))
				const { data: detailProjectProgramming } = await getDetailProjectProgramming({ idProject })
				setDetailProjectProgramming(detailProjectProgramming.data)
			} finally {
				setIsLoading(prev => ({...prev, detailProjectProgramming: false}))
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
<Layouts.DetailContainerLayout
	title={"Detail ProjectProgramming"}
	singularName={"ProjectProgramming"}
	items={{...detailProjectProgramming}}
	isLoading={isLoading.detailProjectProgramming}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailProjectProgramming {...{ data : { ...detailProjectProgramming }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailProjectProgrammingPage

