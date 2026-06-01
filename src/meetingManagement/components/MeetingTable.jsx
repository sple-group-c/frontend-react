
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const MeetingTable = ({ 
    listMeetingManagement}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listMeetingManagement]}
  	  itemsAttrs={[
          {
            id: "idMeeting",
            condition: "",
            label: "Id Meeting",
            featureName: "idMeeting",
            editable: false
          }
  ,        {
            id: "meetingName",
            condition: "",
            label: "Meeting Name",
            featureName: "name",
            editable: false
          }
  ,        {
            id: "location",
            condition: "",
            label: "Location",
            featureName: "location",
            editable: false
          }
  ,        {
            id: "startDate",
            condition: "",
            label: "Start Date",
            featureName: "startDate",
            editable: false
          }
  ,        {
            id: "endDate",
            condition: "",
            label: "End Date",
            featureName: "name",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default MeetingTable;
