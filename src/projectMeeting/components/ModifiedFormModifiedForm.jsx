
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveProjectMeetingDelta from '../services/saveProjectMeetingDelta'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormModifiedForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const create = (data) => {
    const cleanData = cleanFormData(data)
    saveProjectMeetingDelta({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Save ProjectMeetingDelta berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Modified Form" 
		  onSubmit={handleSubmit(create)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_5ffrEFNdEfGYPPE4sY5CeQ" key="Create" type="submit" variant="primary">Create</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormModifiedForm
