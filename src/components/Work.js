import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import img1 from '../images/1.jpg';
import img2 from '../images/bootstrap.png'
import img3 from '../images/winner.png'
import img4 from '../images/adaro.png'
import img5 from '../images/tribe.png'
import img6 from '../images/guanjian.png'


class Work extends React.Component {
  render () {
    return(
      <div className='work'>
              <div>
                  <img src={img2}/>
                  <h3>云美丽购物商城</h3>
                  <p>这是一个专注购物的电商网站，一共有六个子页面，其中特效全部用原生js写的</p>
                  <p>
                    <Button bsStyle="primary">演示demo</Button>&nbsp;
                    <Button bsStyle="default">查看源码</Button>
                  </p>
              </div>
              <div>
                <img src={img2}/>
                <h3>云美丽购物商城</h3>
                <p>这是一个专注购物的电商网站，一共有六个子页面，其中特效全部用原生js写的</p>
                <p>
                  <Button bsStyle="primary">演示demo</Button>&nbsp;
                  <Button bsStyle="default">查看源码</Button>
                </p>
              </div>
              <div>
                <img src={img2}/>
                <h3>云美丽购物商城</h3>
                <p>这是一个专注购物的电商网站，一共有六个子页面，其中特效全部用原生js写的</p>
                <p>
                  <Button bsStyle="primary">演示demo</Button>&nbsp;
                  <Button bsStyle="default">查看源码</Button>
                </p>
              </div>
              <div>
                <img src={img3}/>
                <h3>小金人</h3>
                <p>这是用CSS+DIV制作的一个静态网页，里边特效全部用CSS写的</p>
                <p>
                  <Button bsStyle="primary" href='https://arronwjn.github.io/Winner/#'>演示demo</Button>&nbsp;
                  <Button bsStyle="default" href='https://github.com/arronwjn/Winner'>查看源码</Button>
                </p>
              </div>
              <div>
                <img src={img2}/>
                <h3>现代浏览器博物馆</h3>
                <p>这是在慕课网上自学bootstrap时做的一个项目</p>
                <p>
                  <Button bsStyle="primary">演示demo</Button>&nbsp;
                  <Button bsStyle="default">查看源码</Button>
                </p>
              </div>
              <div>
                <img src={img4}/>
                <h3>ADAYO</h3>
                <p>一个基于HTML+CSS的网页</p>
                <p>
                  <Button bsStyle="primary" href='https://arronwjn.github.io/demo/demo1/index.html'>演示demo</Button>&nbsp;
                  <Button bsStyle="default"　href='https://github.com/arronwjn/demo/tree/gh-pages/demo1'>查看源码</Button>
                </p>
              </div>
              <div>
                <img src={img5}/>
                <h3>tribe</h3>
                <p>整个页面全部采用HTML+CSS布局</p>
                <p>
                  <Button bsStyle="primary" href='https://arronwjn.github.io/demo/demo2/index.html'>演示demo</Button>&nbsp;
                  <Button bsStyle="default"　href='https://github.com/arronwjn/demo/tree/gh-pages/demo2'>查看源码</Button>
                </p>
              </div>
              <div>
                <img src={img6}/>
                <h3>一个移动端APP页面</h3>
                <p>我负责的部分包含四个子页面</p>
                <p>
                  <Button bsStyle="primary" href='https://arronwjn.github.io/demo/demo3/zjlb.html#'>演示demo</Button>&nbsp;
                  <Button bsStyle="default"　href='https://github.com/arronwjn/demo/tree/gh-pages/demo3'>查看源码</Button>
                </p>
              </div>
      </div>
    )
  }
}
export default Work;
