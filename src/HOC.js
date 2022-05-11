import React from "react";

const HOC = (WrappedComponent, entity)=>{
    return class extends React.Component{
        state = {
            data: [],
            term: "" 
        };

        componentDidMount(){
            const fetchData = async () =>{
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const response = await res.json();
                // console.log(response, "data" )
                this.setState({...this.state, data: response});
            };
            fetchData();
        }


        render() {
                let{term, data} = this.state;
                let filteredData = data.slice(0,10)
                .filter((d)=>{
                    if(entity === "users"){
                        console.log(entity)
                        console.log(d)
                        const  {name} = d;
                        return name.indexOf(term)>=0;
                    }
                    if(entity === "posts"){
                        console.log(entity);
                        console.log(d.title)

                        const {title} = d;
                        return title.indexOf(term)>=0;
                    }
                })
                return(
                    <div>
                        <h2>{entity}</h2>
                    <input type="text" value={term} onChange={(e)=>this.setState({...this.state, term: e.target.value})} />
                    <WrappedComponent data={filteredData}></WrappedComponent>
                    </div>
                )
        }
    }

};

export default HOC;