import React, { Component } from 'react';
import $ from 'jquery';

export default class Gototop extends Component {

    componentDidMount(){
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 400) {
              $(".header-sticky").removeClass("sticky-bar");
              $('#back-top').fadeOut(500);
            } else {
              $(".header-sticky").addClass("sticky-bar");
              $('#back-top').fadeIn(500);
            }
          });
          $('#back-top a').on("click", function () {
            $('body,html').animate({
              scrollTop: 0
            }, 800);
            return false;
          });
    }

    render() {
        return (
<div id="back-top">
  <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
</div>

        )
    }
}
