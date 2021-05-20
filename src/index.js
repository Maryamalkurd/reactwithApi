import React from 'react'
import ReactDom from 'react-dom'
import SearchMovies from './components/searchMovies'

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">movie search app using APIs </h1>
                <SearchMovies />
            </div>

        )
    }
}
ReactDom.render(<Main />, document.getElementById('root'));