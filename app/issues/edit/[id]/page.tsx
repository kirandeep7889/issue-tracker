import prisma from '@/prisma/client'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import React from 'react'
import IssueFormSkeleton from './loading'

interface Props {
    params:{id:string}
}

const IssueForm=dynamic(
  ()=> import ('@/app/issues/components/IssueForm'),
  {
    ssr:false,
    loading: ()=> <IssueFormSkeleton/>
  }
)

const EditIssuePage = async ({params}:Props) => {
  const issue = await prisma.issue.findUnique({
        where: { id:parseInt(params.id)}
    })

    if(!issue) notFound();
  return (
    <div>
        <IssueForm issue={issue} />
    </div>
  )
}

export default EditIssuePage
