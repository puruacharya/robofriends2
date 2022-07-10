import React from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBar from '../components/Searchbar' 
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [], 
            searchfield : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json()).then(users => this.setState({robots: users}))
        
    }
    onSearchChange = (e) => {
        this.setState({ searchfield : e.target.value })
    }
    render(){
        const filteredRobos = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return (
        <div className="tc">
            <h1 className="f1">Robot Friends</h1>
            <SearchBar searchChange={this.onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobos}/>
            </Scroll>
            
        </div>
        
    );
    }
}
export default App;