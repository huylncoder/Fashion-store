import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Về chúng tôi</h4>
              <ul>
                <li><a href="#">Giới thiệu DOMINGO</a></li>
                <li><a href="#">Tuyển dụng</a></li>
                <li><a href="#">Cảm hứng thời trang</a></li>
                <li><a href="#">Chính sách bảo hành</a></li>
                <li><a href="#">Chính sách giao hàng</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 single-footer-widget">
              <h4>Hỗ trợ khách hàng</h4>
              <ul>
                <li><a href="#">Liên hệ đến DOMINGO</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Mua online tại cửa hàng</a></li>
                <li><a href="#">Hướng dẫn đặt hàng</a></li>
                <li><a href="#">Quy định hướng dẫn đổi/trả hàng</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 single-footer-widget">
              <h4>Liên lạc</h4>
              <ul>
                <li><a href="#">Đặt hàng trực tuyến (8h-21h) <br/> <a href="">012345678912</a> </a></li>
                <li><a href="#">Chăm sóc khách hàng <br/> <a href="">0839354223</a> </a></li>
                <li><a href="#">cskh.domingo@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;