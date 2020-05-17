import React, { Component } from 'react';
import { fetchMovieCredits } from '../services/themoviedb-api';

const getMovieIdFromProps = props => props.match.params.movieId;
const getProfileImageURL = path => `https://image.tmdb.org/t/p/w200/${path}`;

const mapper = items => {
  return items.map(
    ({ id, character, name, profile_path: profileImagePath, ...props }) => ({
      id,
      character,
      name,
      profileImagePath,
      props,
    }),
  );
};

export default class MovieCreditsPage extends Component {
  state = {
    credits: [],
  };

  componentDidMount() {
    const currentMovieId = getMovieIdFromProps(this.props);

    fetchMovieCredits(currentMovieId).then(credits =>
      this.setState({ credits: mapper(credits) }),
    );
  }

  render() {
    const { credits } = this.state;

    return (
      <>
        <h2>Movie Credits Page</h2>
        {credits.length > 0 && (
          <>
            <ul>
              {credits.map(item => (
                <li key={item.id}>
                  <div className="profile">
                    {item.profileImagePath && (
                      <img
                        src={getProfileImageURL(item.profileImagePath)}
                        alt={item.name}
                      />
                    )}

                    <p>{item.name}</p>
                    <p>Character: {item.character}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
