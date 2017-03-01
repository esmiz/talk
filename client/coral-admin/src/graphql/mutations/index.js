import {graphql} from 'react-apollo';
import SET_USER_STATUS from './setUserStatus.graphql';
import SET_COMMENT_STATUS from './setCommentStatus.graphql';

export const banUser = graphql(SET_USER_STATUS, {
  props: ({mutate}) => ({
    banUser: ({userId}) => {
      return mutate({
        variables: {
          userId,
          status: 'BANNED'
        },
        refetchQueries: ['Users']
      });
    }}),
});

export const setUserStatus = graphql(SET_USER_STATUS, {
  props: ({mutate}) => ({
    acceptUser: (userId) => {
      return mutate({
        variables: {
          userId,
          status: 'APPROVED'
        },
        refetchQueries: ['modUserFlaggedQuery']
      });
    },
    rejectUser: (userId) => {
      return mutate({
        variables: {
          userId,
          status: 'BANNED'
        },
        refetchQueries: ['modUserFlaggedQuery']
      });
    }
  })
});

export const setCommentStatus = graphql(SET_COMMENT_STATUS, {
  props: ({mutate}) => ({
    acceptComment: ({commentId}) => {
      return mutate({
        variables: {
          commentId,
          status: 'ACCEPTED'
        },
        refetchQueries: ['ModQueue']
      });
    },
    rejectComment: ({commentId}) => {
      return mutate({
        variables: {
          commentId,
          status: 'REJECTED'
        },
        refetchQueries: ['ModQueue']
      });
    }
  })
});
