import IssueStattusBadge from '@/app/components/IssueStattusBadge';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react';

interface props {
    params: {id:string}
}

const IssueDetailPage =  async({params}:props) => {
   

    const issue=await prisma.issue.findUnique({
    where: {id:parseInt(params.id)}
  });

    if(!issue)
        notFound();
    return (
    <div>
        <Heading>{issue.title}</Heading>
        <Flex className='space-x-3' my="2">
            <IssueStattusBadge status={issue.status}/>
            <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card>
          <p>{issue.description}</p>
        </Card>  
    </div>
  )
}

export default IssueDetailPage
