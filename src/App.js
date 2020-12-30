import React from 'react';

class App extends React.Component{
  state={
    isLoading: true,    // 영화 데이터 로딩 상태(로딩 중: true)
    movies: [],         // 이 곳에 로딩한 영화 정보를 저장.
  };

  // 컴포넌트 마운트 6초 후에 로딩 상태 변경.
  componentDidMount(){
    // 영화 데이터 로딩 완료!
    setTimeout( () => {            // 6초 후에 isLoading state를 false로 바꿈.
      this.setState({ isLoading: false});
    }, 6000);
  }

  render(){
    const {isLoading} = this.state;

    return(
      <div>
        {isLoading ? 'Loading...' : 'We are ready'}
      </div>
    );
  }
}

export default App;