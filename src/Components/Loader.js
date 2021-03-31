import React, { Component } from 'react';
import $ from 'jquery';


export default class Loaderfile extends Component {
    componentDidMount(){
        $(window).on('load', function () {
            $('#preloader-active').delay(450).fadeOut('slow');
            $('body').delay(450).css({
              'overflow': 'visible'
            });
          });
        }
    render() {
        return (
<div id="preloader-active">
  <div className="preloader d-flex align-items-center justify-content-center">
    <div className="preloader-inner position-relative">
      <div className="preloader-circle" />
      <div className="preloader-img pere-text">
        <img src="assets/img/logo/loder.jpg" alt />
      </div>
    </div>
  </div>
</div>

        )
    }
}
