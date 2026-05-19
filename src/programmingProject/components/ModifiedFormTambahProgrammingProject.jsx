
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
import saveProgrammingProject from '../services/saveProgrammingProject'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahProgrammingProject = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    saveProgrammingProject({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Save ProgrammingProject berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah ProgrammingProject" 
		  onSubmit={handleSubmit(kirim)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="name"
	        name="name"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Project Name"
	          placeholder="Masukkan project name"
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
	          label="Project Description"
	          placeholder="Masukkan project description"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="onlineRepository"
	        name="onlineRepository"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Repository Provider"
	          placeholder="Masukkan repository provider"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="repositoryLink"
	        name="repositoryLink"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Repository Link"
	          placeholder="Masukkan repository link"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="defaultBranch"
	        name="defaultBranch"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Default Branch"
	          placeholder="Masukkan default branch"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_eKLWMFNREfGIZfuhTE_CHA" key="Kirim" type="submit" variant="primary">Kirim</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormTambahProgrammingProject
