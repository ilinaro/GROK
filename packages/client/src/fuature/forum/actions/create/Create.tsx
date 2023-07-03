import React from 'react';
import { ForumLayout } from '../../layouts/ForumLayout';
import { ForumCreateForm } from '../../components/CreateForm'

type ForumActionCreateT = {};

export const ForumActionCreate: React.FC<ForumActionCreateT> = () => {

  return (
   <ForumLayout>

     <ForumCreateForm/>

   </ForumLayout>
  );
};
