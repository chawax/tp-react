import React from 'react';
import HobbieList from '../HobbiesList';

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
    <div onClick={onPress} role="panda">
      <h1>{name}</h1>
      {interests && <HobbieList interests={interests} />}
    </div>
  );
};

PandaItem.defaultProps = {
  interests: [],
};

export default PandaItem;
