import React from "react";
import axios from "axios";

class Zvit extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("https://spiri-camp-user-registration.herokuapp.com/")
      .then((response) => this.setState({ data: response.data.users }));
  }

  render() {
    return (
      <div>
        {this.state.data.map((data, idx) => (
          <tr className="tr" key={idx}>
            <td width="40px">{data._id}</td>
            <td width="250px">
              {data.surname} {data.name} {data.fatherName}
            </td>
            <td width="100px">{data.old}</td>
            <td width="100px">{data.sex}</td>
            <td width="100px">{data.phone}</td>
            <td width="200px">{data.email}</td>
            <td width="100px">{data.region}</td>
            <td width="100px">{data.church}</td>
            <td width="100px">{data.leader}</td>
            <td width="100px">{data.transport}</td>
            <td width="100px">{data.number}</td>

            {/* <td width="100px">{data.church}</td> */}

          </tr>
        ))}
      </div>
    );
  }
}
export default Zvit;