import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import img1 from '../images/1.jpg'


class Work extends React.Component {
  render () {
    return(
      <div className='work'>
              <div>
                <Thumbnail src={img1} alt="40x60" className='img'>
                  <h3>云美丽购物商城</h3>
                  <p>这是一个专注购物的电商网站，一共有六个子页面，其中特效全部用原生js写的</p>
                  <p>
                    <Button bsStyle="primary">演示demo</Button>&nbsp;
                    <Button bsStyle="default">查看源码</Button>
                  </p>
                </Thumbnail>
              </div>
              <div>
                <Thumbnail src={img1} alt="242x200" className='img'>
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </div>
              <div>
                <Thumbnail src={img1} alt="242x200" className='img'>
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </div>
      </div>
    )
  }
}
export default Work;
