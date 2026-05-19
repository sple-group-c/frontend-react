
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const ProgrammingProjectTable = ({ 
    listProgrammingProject}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (programmingProjectItem) => {
    isMobile() && navigate();
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listProgrammingProject]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "idProject",
            condition: "",
            label: "Id Project",
            featureName: "idProject",
            editable: false
          }
  ,        {
            id: "projectName",
            condition: "",
            label: "Project Name",
            featureName: "name",
            editable: false
          }
  ]}
        itemsEvents={(programmingProjectItem) => [
          <Link to=''>
            <Button
              id="_fMIeQFNYEfGIZfuhTE_CHA"
              size="sm"
              variant=
                          "secondary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default ProgrammingProjectTable;
