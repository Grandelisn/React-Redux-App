
import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchData} from './actions/index'
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.pmData.name}</h1>
        {props.is_loading_data ? 
          (<div className = 'load'> Loading... </div>) :
          props.error ? (<div>{props.error}</div>) :
          (<>
            <p>Mass: {props.pmData.mass} space units</p>
            <p>Height: {props.pmData.height} space units</p>
            <p>Birth Year: {props.pmData.birth_year}</p>
          </>
        )}
      </header>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    pmData: state.pmData,
    is_loading_data: state.is_loading_data,
    error: state.error
  }
}
export default connect(mapStateToProps, {fetchData})(App);
