import IssueStattusBadge from '@/app/components/IssueStattusBadge';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'

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
        <Card className='prose mt-4'>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>  
    </div>
  )
}

export default IssueDetailPage
