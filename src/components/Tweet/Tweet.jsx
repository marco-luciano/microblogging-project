import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import './Tweet.sass';

const Tweet = (props) => {
  return <div className="Tweet">
    <Flex direction="column" gap={3}>
      <Flex justifyContent="space-between" className="tweet__header"> 
        <Box className="tweet__user">{props.user}</Box>
        <Box className="tweet__date"> {props.date}</Box>
      </Flex>
      <Box className="tweet__text"> {props.text} </Box>
    </Flex>
  </div>;
}

export default Tweet;