import React from 'react';
import { ForumLayout } from '../../layouts/ForumLayout';
import { ForumCreateForm } from '../../components/CreateForm'

export const ForumActionCreate: React.FC = () => {
  return (
   <ForumLayout>
     <ForumCreateForm />
   </ForumLayout>
  );
};
