
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';
import * as Layouts from "@/commons/layouts";
const ProjectTable = ({ 
    listProject}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (projectItem) => {
    isMobile() && navigate(`/project/${projectItem.idProject}`
    );
  };
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listProject]}
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
        itemsEvents={(projectItem) => [
          <Link to={`/project/${projectItem.idProject}`}>
            <Button
              id="_u5JMwFJzEfGo280AeBDPFw"
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
        ]}
  	/>
  </>
  )
};

export default ProjectTable;
