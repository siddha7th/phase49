// import React from "react";
import React from "react";

export default class FetchLaunches extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      data : false
    };
  }


  componentDidMount() {
    let url = "https://api.spacexdata.com/v3/launches?limit=100";
    fetch(url,{
      method : 'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }).then((result)=>{result.json()
        .then((resp)=>{
        this.setState({
          data:resp,
          items:json,
        })
      })
    })
  }

  render() {
    const data = this.state.data;
    var items = this.state;
    console.log(data[0]);
    return(
      <div>
        {
          data ?
          
            <div className="launch">
              {items.map(item => (
                <div key={item.mission_id}>
                  <img src={item.links} />
                   <p>{item.mission_name}</p>
                   <p>Mission Ids: {item.mission_id}</p>
                   <p>Launch year: {item.launch_year}</p>
                   <p>Successful Launch: {item.launch_success}</p>
                   <p>Successful Landing: {item.land_success}</p>
                </div>
              ))}
            </div>
            : <p>Please wait</p>
        }
        <h1>Fetch Launches Data</h1>
      </div>
    )
  }
}