import React from 'react';
import styled from 'styled-components';

export const Loader = () => (
  <Wrapper />
)

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  margin: 0 auto;
  height: 8rem;
  width: 8rem;
  background-size: 8rem;
  background-image: url('../../../assets/images/gif/loader.gif');
  background-repeat: no-repeat;
`