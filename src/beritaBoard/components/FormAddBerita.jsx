
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
import addBerita from '../services/addBerita'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddBerita = ({
 }) => {
  const {
    control,
    handleSubmit,
  } = useForm()

  const navigate = useNavigate()

  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    addBerita({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Add Berita berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }


  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="AddBerita"
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
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />

		  ,

		  ]}

		  itemsEvents={[
		    <Button id="_mfEv4EBeEfG_EbYrkoLnzw" key="OnSubmit Event" type="submit" variant="primary">OnSubmit Event</Button>
	    ]}
	  />

	</div>
  )
}

export default FormAddBerita
