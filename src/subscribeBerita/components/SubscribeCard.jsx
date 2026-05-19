
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const SubscribeCard = ({ 
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[]}
  	
  	itemsAttrs={[
  ]}
      itemsEvents={(subscribeItem) => [
  	]}
    />
  )	
};

export default SubscribeCard;
