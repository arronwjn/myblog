import React from 'react';
import {Link} from 'react-router';
// import '../main.css';
import Img1 from '../images/1.jpg'


class Note extends React.Component {
  render () {
    return(
        <div className='about'>
          <ul>
            <li className='about-li'>
              <dt><i className="fa fa-location-arrow" aria-hidden="true"></i><span>基本信息</span></dt>
              <div className='img'><img src={Img1}/></div>
              <dd><span>个人信息:</span><lable>王健男/男/23岁</lable></dd>
              <dd><span>毕业院校:</span><lable>长春工业大学</lable></dd>
              <dd><span>所学专业:</span><lable>计算机网络技术</lable></dd>
              <dd><span>应聘岗位:</span><lable>前端工程师</lable></dd>
              <dd><span>现居住地:</span><lable>河北秦皇岛</lable></dd>
            </li>
            <li>
              <dt><i className="fa fa-location-arrow" aria-hidden="true"></i><span>联系方式</span></dt>
              <dd><span>联系电话:</span><lable>15333347509</lable></dd>
              <dd><span>联系微信:</span><lable>13756316291</lable></dd>
              <dd><span>联系QQ:</span><lable>904089747</lable></dd>
              <dd><span>联系邮箱:</span><lable>904089747@qq.com</lable></dd>
              <dd><span>blog:</span><a href='http://www.cnblogs.com/Aaron-wang/'>http://www.cnblogs.com/Aaron-wang/</a></dd>
              <dd><span>github:</span><a href='https://github.com/arronwjn'>https://github.com/arronwjn</a></dd>
              <dd><span>Markdown:</span><a href='https://arronwjn.github.io/#toc'>https://arronwjn.github.io/#toc</a></dd>
            </li>
            <li>
              <dt><i className="fa fa-location-arrow" aria-hidden="true"></i><span>主要技能</span></dt>
              <dd>
                <button type="button" className="btn btn-primary">HTML</button>
                <button type="button" className="btn btn-primary">CSS</button>
                <button type="button" className="btn btn-primary">Javascript</button>
                <button type="button" className="btn btn-success">jquery</button>
                <button type="button" className="btn btn-success">BootStrap</button>
                <button type="button" className="btn btn-warning">React</button>
                <button type="button" className="btn btn-warning">Node.js</button>
              </dd>
            </li>
            <li>
              <dt><i className="fa fa-location-arrow" aria-hidden="true"></i><span>技能详解</span></dt>
              <dd>
                <ul>
                  <li>
                    <div></div>
                    <h3>HTML/CSS</h3>
                    <p>
                      熟练使用html的标签以及CSS的选择器,样式,能够编写语义话的html,熟练运用
                      DIV+CSS布局,擅长运用flexbox布局．
                    </p>
                  </li>
                  <li>
                    <div></div>
                    <h3>Javascript</h3>
                    <p>熟悉原生js,能运用原生js编写计算器,轮播图,购物网站结算页面,熟悉ES6语法.</p>
                  </li>
                  <li>
                    <div></div>
                    <h3>jquery</h3>
                    <p>熟悉jq语法规则,能够运用jq进行常规功能开发.</p>
                  </li>
                  <li>
                    <div></div>
                    <h3>BootStrap</h3>
                    <p>运用BootStrap框架完成页面开发,熟悉使用常用组件如轮播图,响应式导航条</p>
                  </li>
                  <li>
                    <div></div>
                    <h3>React</h3>
                    <p>熟悉React的生态系统,能够运用React独立开发页面</p>
                  </li>
                </ul>
              </dd>
            </li>
            <li>
              <dt><i className="fa fa-location-arrow" aria-hidden="true"></i><span>自我评价</span></dt>
              <p>
                高考结束后由于对计算机的热爱，报考了计算机专业，大学期间对网站开发的热爱更是一发不可收拾，
                利用空闲时间在视频网站自学一些先进技术，对学习充满着激情．
              </p>
              <p>
                本人对工作有较强责任心，一个项目不完成睡觉也要打代码，有较强的自学能力，乐于帮助他人，也比较爱
                问问题，享受解决问题的快感．
              </p>
            </li>
          </ul>
        </div>
    )
  }
}
export default Note;
