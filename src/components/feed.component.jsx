import React from 'react'
import Stories from './stories.component'
import styled from 'styled-components';

const Feed = () => {
    return (
        <FeedWrapper>
            <Stories />
        </FeedWrapper>
    )
}

const FeedWrapper = styled.div`
    flex: 1;
    padding: 30 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Feed;