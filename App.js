import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,    // 영화 데이터 로딩 상태(로딩 중: true)
    movies: [],         // 이 곳에 로딩한 영화 정보를 저장.
  };

  getMovies = async () => {
    const { data: { data: { movies }, }, } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies: movies, isLoading: false });
  }

  // 컴포넌트 마운트 6초 후에 로딩 상태 변경.
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) :
        (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )
        }
      </section>
    );
  }
}

export default App;