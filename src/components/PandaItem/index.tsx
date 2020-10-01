import { render } from '@testing-library/react';
import React from 'react';

interface Props {
  name: string;
  interests: string[];
  onPress: () => void;
}

/*
class PandaItem extends React.Component<Props> {
  render() {
    return (
      <div onClick={this.props.onPress}>
        <h1>{this.props.name}</h1>
        {this.props.interests && (
          <ul>
            {this.props.interests.map((interest) => {
              return <li key={interest}>{interest}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
*/

const PandaItem = ({ name, interests, onPress }: Props) => {
  //const { name, interests, onPress } = props;
  return (
    <div onClick={onPress}>
      <h1>{name}</h1>
      {interests && (
        <ul>
          {interests.map((interest) => {
            return <li key={interest}>{interest}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

PandaItem.defaultProps = {
  interests: [],
};

export default PandaItem;
