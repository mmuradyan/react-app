import React, { Component } from 'react'

export default class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount(){
        fetch('http://api.icndb.com/jokes/random/5')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json.value
                })
            })

    }

    render() {

        var { isLoaded, data } = this.state;

        if(!isLoaded){
            return <h3>Data is loading...</h3>
        }else{
            console.log(data);
            return (
                <ul>
                    {data.map(item => (
                       <li key={item.id}>{item.joke}</li> 
                    ))}
                </ul>
            )
        }


    }
}
