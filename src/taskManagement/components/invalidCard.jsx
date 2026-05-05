
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const invalidCard = ({ taskData,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[taskData]}
  	
  	itemsAttrs={[
          {
            id: "title",
            condition: "",
            label: "title",
            featureName: "title",
            editable: false
          }
  ,        {
            id: "description",
            condition: "",
            label: "description",
            featureName: "description",
            editable: false
          }
  ,        {
            id: "status",
            condition: "",
            label: "status",
            featureName: "status",
            editable: false
          }
  ]}
      itemsEvents={(Item) => [
        <Link to=''>
          <Button
            id="_vRENIEBiEfG_EbYrkoLnzw"
            size="sm"
            variant=
                        "secondary"
          >
            Edit
          </Button>
        </Link>
  	]}
    />
  )	
};

export default invalidCard;
