import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
import { notFound } from 'next/navigation';
import DeleteIssueButton from './DeleteIssueButton';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';
import AssigneeSelect from './AssigneeSelect';
import { cache } from 'react';

interface Props {
  params: { id: string };
}
const fetchUser=cache( (issueId:number)=>prisma.issue.findUnique({where: {id:issueId}}) )

const IssueDetailPage = async ({ params }: Props) => {
  
const session= await getServerSession(authOptions)
  const issue = await fetchUser(parseInt(params.id))
  if (!issue) notFound();


  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className='md:col-span-4'>
        <IssueDetails issue={issue} />
      </Box>
      { session &&
      <Box>
       <Flex direction='column' gap='4' > 
         <AssigneeSelect issue={issue}/>
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />  
       </Flex>
      </Box> 
        }
    </Grid>
  );
}

export async function generateMetaData({ params}: Props) {
<<<<<<< HEAD
  const issue=await fetchUser(parseInt(params.id))
=======
  const issue=await prisma.issue.findUnique({
    where: {
      id:parseInt(params.id)
    }
  })
>>>>>>> 773695e5b94c9b5ecfcb6901e11a48177571da3d
  return {
    title: issue?.title,
    description : 'Details of issue' + issue?.id
  }
} 

export default IssueDetailPage;
