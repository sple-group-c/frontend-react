
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const invalidCard = ({ beritaData,


	}) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentCardLayout
      items={[beritaData]}

  	itemsAttrs={[
          {
            id: "content",
            condition: "",
            label: "content",
            featureName: "content",
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
