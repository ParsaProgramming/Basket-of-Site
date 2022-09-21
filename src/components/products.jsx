import { Component } from "react";
import Product from "./product";

class Products extends Component{
    state = {
        products: [
            {id:1, Productname: "Laptop", count: 5},
            {id:2, Productname: "Mobile", count: 9},
            {id:3, Productname: "Airpod", count: 3},
        ]
    }
    render(){
        return(
            <>
            {this.state.products.map((P, index) => (
                <Product key = {index} ProductName = {P.Productname} counter = {P.count}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, consequuntur.
                </Product>
            ))}
            </>
        )

    }
}

export default Products;
