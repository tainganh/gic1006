import React, { Component } from 'react';

class Product extends Component {
  //cách 1
  // constructor(props){
  //   super(props);
  //    this.onAddtocart=this.onAddtocart.bind(this);
  // }
  // onAddtocart(){
  //   alert(this.props.name);
  // }
  
  onAddtocart2 = () => {
    alert(this.props.name);
  }
  render() {
    return (
      
        <div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
              <img  alt={this.props.name} src={this.props.image}/>
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>
                 {this.props.price}
                </p>                
                <p>
                  {/* //arow funtion cách */}
                  {/* <a className="btn btn-default" onClick={() => this.onAddtocart(this.props.name) }>Mua Ngay</a> */}
                  <a className="btn btn-default" onClick={ this.onAddtocart2 }>Mua Ngay</a>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Product;
