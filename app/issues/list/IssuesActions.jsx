import { Flex } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes/dist/cjs/index.js'
import Link from 'next/link'
import React from 'react'
import IssueStatusFilter from './IssueStatusFilter'

const IssuesActions = () => {
  return (
    <Flex justify="between" >
    <IssueStatusFilter/>  
    <Button>
        <Link href='/issues/new'>
            New Issue
        </Link>
    </Button>
  </Flex>
  )
}

export default IssuesActions
