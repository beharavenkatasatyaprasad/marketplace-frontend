import React from "react";
import CardsContainer from "./cards-container";

class CardGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/getData")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, data } = this.state;
    const dataArray = data.result;
    console.log(dataArray)
    return (
      <div>
        <CardsContainer
          error={error}
          isLoaded={isLoaded}
          dataArray={dataArray}
        />
      </div>
    );
  }
}

export default CardGroup;