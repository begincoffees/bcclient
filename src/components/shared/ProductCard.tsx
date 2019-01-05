import React, { Component } from 'react';
import { Col, Card, Spin } from 'antd';

import { AddItemButton } from 'src/components';
import { navigate } from '@reach/router';
import { ProductData } from '../Shop';

interface CardProps {
  readonly data: ProductData;
  readonly index: number;
  readonly viewPage: (product: ProductData) => void;
}

interface State {
  readonly loading: boolean | null;
  readonly image: string | null;
  readonly index: number | null;
  readonly done: boolean;
}

class ProductCard extends Component<CardProps, State> {
  state={
    loading: null,
    image: null,
    index: null,
    done: false
  }
  
  componentDidMount() {
    this.setState({loading: true})
    this.preloadImage()
  }

  componentDidUpdate(prevProps: CardProps, prevState: State) {
    const loadedImg = prevState.image === null && this.state.image !== null
    
    if(loadedImg){
      this.setState({loading: false})
    }
  }

  async preloadImage() {
    let next = Math.floor((Math.random() * 100) + 1);
    // let time
    const variable = `image=${next++}`
    const url = 'https://picsum.photos/200/300/?random' + variable
    let x = await new Image()
    x.src = url

    // time = 1000
    
    this.setState({image: url})
  }

  showData = (next: number) => {
    const { data } = this.props;
    return (
      <Card 
        hoverable
        cover={<img src={`${this.state.image}=${next++}`} />}
        style={{ margin: '1rem', width: '240' }}
      >
        <h3>{data.name || ''}</h3>
        <p>{data.description || ''}</p>
        <p>
            {data.price.length === 4 ? (`$${data.price.slice(0,2)}`) : 
            data.price.length === 5 ? (`$${data.price.slice(0,3)}`) : (`$${data.price}`)}
         </p>

 
        <AddItemButton product={this.props.data}/>
      </Card>
    )
  }
  render() {
    let next = Math.floor((Math.random() * 100) + 1);
    return (
      <Col 
        span={6} 
        onClick={() => {
          this.props.viewPage(this.props.data)
          navigate('/product')
        }}
      >
        {this.state.loading ?
          <Card style={{display: 'flex', alignContent: 'center'}}>
            <Spin style={{margin: 'auto', width: '10rem'}}/>
          </Card>
        : this.showData(next)
        }
      </Col>
    )
  }
}


export { ProductCard }