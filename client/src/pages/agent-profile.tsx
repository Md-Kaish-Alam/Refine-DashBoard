import React from 'react'
import { useOne } from '@pankod/refine-core';
import { useParams } from '@pankod/refine-react-router-v6';
import { Profile } from 'components';
import { Typography } from '@pankod/refine-mui';

const AgentProfile = () => {

  const { id } = useParams()

  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: id as string,
  })

  const agentProfile = data?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error</Typography>

  return (
    <Profile 
      type="Agent-"
      name={agentProfile.name}
      email={agentProfile.email}
      avatar={agentProfile.avatar}
      properties={agentProfile.allProperties}
    />
  )
}

export default AgentProfile