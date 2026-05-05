
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
import editBerita from '../services/editBerita'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditBerita = ({
 }) => {
  const {
    control,
    handleSubmit,
  } = useForm({ defaultValues:  })

  const navigate = useNavigate()

  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    editBerita({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`null`)
  	notifySuccess(`Edit Berita berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }


  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="EditBerita"
		  onSubmit={handleSubmit(onSubmitEvent)}

	    vas={[
		  ]}

		  formFields={[

	      <Controller
	        key="content"
	        name="content"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="content"
	          placeholder="Masukkan content"
	          defaultValue={.content}
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

export default FormEditBerita
