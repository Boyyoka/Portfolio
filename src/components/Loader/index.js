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
  height: 4rem;
  width: 4rem;
  background-size: 4rem;
  background-image: url('../../../assets/images/gif/loader.gif');
  background-repeat: no-repeat;
`