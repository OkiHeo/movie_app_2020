import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        /* location.state가 undefined인 경우 history.push("/")를 실행하도록 */
        if( location.state === undefined ){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return(
                <div>
                    <h2>{location.state.title}</h2>
                    <span>{location.state.year}</span>
                    <p>{location.state.summary}</p>
                </div>
            );
        }else{
            return null;    /* location.state가 없으면 null을 반환하고, render()가 수행된 이후 componentDidMount()가 실행되어 리다이렉션. */
        }
    }
}

export default Detail;