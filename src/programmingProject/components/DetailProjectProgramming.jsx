
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";
import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";

const DetailProjectProgramming = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
                {
                  id: "onlineRepository",
                  condition: "",
                  label: "Online Repository",
                  featureName: "onlineRepository",
                }
        ,        {
                  id: "repositoryLink",
                  condition: "",
                  label: "Repository Link",
                  featureName: "repositoryLink",
                }
        ,        {
                  id: "defaultBranch",
                  condition: "",
                  label: "Default Branch",
                  featureName: "defaultBranch",
                }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailProjectProgramming;
