
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
import editTask from '../services/editTask'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditTask = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues:  })
  
  
  
  
  const navigate = useNavigate()
  
  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    editTask({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`null`)
  	notifySuccess(`Edit Task berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="EditTask" 
		  onSubmit={handleSubmit(onSubmitEvent)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="title"
	        name="title"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="title"
	          placeholder="Masukkan title"
	          defaultValue={.title}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="description"
	        name="description"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="description"
	          placeholder="Masukkan description"
	          defaultValue={.description}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="status"
	        name="status"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="status"
	          placeholder="Masukkan status"
	          defaultValue={.status}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_e-coUEBkEfG_EbYrkoLnzw" key="OnSubmit Event" type="submit" variant="primary">OnSubmit Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditTask
