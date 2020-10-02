import React from 'react';
import styled from 'styled-components';

interface Props {
  interests: string[];
  className?: string;
}

const HobbiesList = (props: Props) => {
  return (
    <ul className={props.className}>
      {props.interests.map((interest) => {
        return <li key={interest}>{interest}</li>;
      })}
    </ul>
  );
};

export default styled(HobbiesList)`
  background-color: ${(props) => (props.interests.length > 2 ? props.theme.primary : props.theme.secondary)};
  li:nth-child(odd) {
    color: yellow;
  }
  li:nth-child(even) {
    color: white;
  }
`;
