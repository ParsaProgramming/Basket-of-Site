import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Product extends Component {
  state = {
    counter : this.props.counter,
  };
  render() {
    return (
      <div>
        <span className="m-2">{this.props.ProductName}</span>
        <span className="badge bg-primary">{this.state.counter}</span>
        <button onClick={this.AddCounter} className="m-2 btn btn-success">
          Add
        </button>
        <button onClick ={this.DecreaseCounter} className="m-2 btn btn-warning">Decrease</button>
        <button className="m-2 btn btn-danger">delete</button>
        <p>{this.props.children}</p>
      </div>
    );
  }
  AddCounter = ()=> {
    this.setState({ counter: this.state.counter + 1 });
  }
  DecreaseCounter = ()=>{
    this.setState({counter : this.state.counter - 1});
  }

}

export default Product;
