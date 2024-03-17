
import React, { useEffect } from 'react';
import './DashBoard.css';
import logo from './img/logo-bao-moi.png';
import img from './img/655d32e01da1a-welcome-to-samdalri_olret.webp';
import img1 from './img/jPTwLNzWGvJzbxjVbpqGaF5kB1k.jpg';
import logo1 from './img/review-chao-mung-den-samdalri-1.jpg';
import logo2 from './img/20231230073810_Ji-Chang-Wook-Shin-Hye-Sun-bright.webp';
import logo3 from './img/03f05a3d62cde4a4a6f8947d2d536880.jpg';
import logo4 from './img/ji-chang-wook-ngoisaovn-w1200-h720.jpg';
import logo5 from './img/Shinhyesun-Jichangwo.jpg';
import logo6 from './img/4199b625b4eb787570c43e73beffb87b.jpg';
import logo7 from './img/south-korean-actor-ji-chang-wook-plays-the-lead-character-of-kim-je-ha-in-tvns-2016-drama-the-k2.jpg';
import logo8 from './img/chao-mung-den-voi-Samdalri-Welcome-to-Samdalri-05.jpg';
import { fetchUserById, fetchById } from './../features/apiSave/recallApiLoading';

import { useSelector, useDispatch } from 'react-redux';
import {useState } from 'react';

export const DashBoard = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const name = useSelector(state => state.counter.name);
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (test) {
      dispatch(fetchUserById());
    }
  }, [test, dispatch]);

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselData = [
    {
      image: logo1,
      title: "",
      description: "",
    },
    {
      image: img,
      title: "",
      description: "",
    },
    {
      image: img1,
      title: "",
      description: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselData.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='header'>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to my Website</h1>
      </div>

      <b>
        <div className="container">
          <div className="search">
            <div className="search-input">
              <input type="search" placeholder='Search...' />
            </div>
            <div className="search-button">
              <button>Tìm kiếm</button>
            </div>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#">Thời sự</a></li>
              <li><a href="#">Thế giới</a></li>
              <li><a href="#">Kdrama</a></li>
              <li><a href="#">Sức khỏe</a></li>
              <li><a href="#">Giáo dục</a></li>
            </ul>
          </div>
        </div>
      </b>

      <div id='slide'>
        
              <img src={logo1} alt="Logo 1" />
              {/* <img src={img} alt="Image 1" />
              <img src={img1} alt="Image 2" /> */}
            </div>
            <h2>Tin mới nhất!</h2>
                <div className="new_list">
                    <h3> Sức hút không tưởng của "siêu phẩm chữa lành" xứ Hàn, vượt 5 bom tấn để lập thành tích khủng</h3>
                    <div className="news_item">
                
                        <img src={logo5} alt="" className='news_img' />
                        <div className="content">
                        
                        <p>Chào Mừng Đến Samdalri (Welcome to Samdalri) chỉ còn 1 tập phim nữa là chính thức kết thúc hành trình tạo được nhiều thiện cảm tốt đẹp với khán giả. 
                            Tập 15 lên sóng tối 20/1 vừa qua tiếp tục giữ vững phong độ với rating tăng lên mức kỷ lục là 10,365%.
                             Con số này giúp bộ phim đứng đầu các phim truyền hình tối ngày 20 vừa qua trên tất cả các kênh, cả đài trả phí lẫn đài trung ương.</p>
                        </div> 
                </div>
            </div>
            <div className="new_list">
                    <h3>Phim Ji Chang Wook, Shin Hye Sun kết trọn vẹn nhưng vẫn có điều tiếc nuối</h3>
                    <div className="news_item">
                
                        <img src={logo2} alt="" className='news_img'/>
                        <div className="content">
                        
                        <p>“Chào mừng đến Samdalri” khép lại hành trình phát sóng vào tối 21.1 với kết thúc viên mãn dành cho các nhân vật.
                             Tuy nhiên, phim vẫn chưa thể đạt rating 20% như Ji Chang Wook, Shin Hye Sun kì vọng trước đó.</p>
                        </div> 
                </div>
            </div>
            <div className="new_list">
                    <h3>Chứng kiến tận mắt hành vi nhạy cảm của Ji Chang Wook, mỹ nhân Chàng Hậu bỗng được khen hết lời nhờ thái độ này</h3>
                    <div className="news_item">
                
                        <img src={logo4} alt="" className='news_img'/>
                        <div className="content">
                        
                        <p>Ji Chang Wook dính phốt ngay đầu năm mới: Hứng chỉ trích dữ dội vì hành động phản cảm trước mặt mỹ nhân Chàng Hậu
                            Ji Chang Wook hiện trở thành tâm điểm chỉ trích của cộng đồng mạng xứ Hàn vì hút thuốc lá trong phòng kín nơi có nhiều đồng nghiệp. 
                            Giữa tâm bão ồn ào liên quan tới tài tử họ Ji, 
                            minh tinh Shin Hye Sun (Chàng Hậu) bỗng được réo gọi, chiếm sóng mạng xã hội. 
                            Và nguyên nhân đến từ thái độ chuyên nghiệp của cô khi tận mắt chứng kiến bạn diễn Ji Chang Wook hút thuốc trong phòng.
                            Trong clip ghi lại buổi tập của đoàn phim Welcome To Samdal-ri, Shin Hye Sun vẫn tập trung hết mình vào việc tập luyện diễn xuất, 
                            khớp kịch bản cùng các đồng nghiệp dù biết Ji Chang Wook đang phì phèo thuốc lá. Cô còn liên tục tạo bầu không khí vui vẻ cùng các bạn diễn.</p>
                        </div> 
                </div>
            </div>
            <div className="new_list">
                    <h3>Ji Chang Wook “The K2”</h3>
                    <div className="news_item">
                
                        <img src={logo3} alt="" className='news_img'/>
                        <div className="content">
                        
                        <p>Anh là cựu đặc vụ quân sự Blackstone, từng đóng quân tại Iraq cho đến khi trốn sang Hàn Quốc sau khi bị vu oan tội giết người, 
                            bị truy nã bởi Interpol. Khi trốn về Hàn Quốc, anh và Yoo Jin đã gặp nhau trong một hoàn cảnh đặc biệt, 
                            khiến Yoo Jin phải nhận anh vào JSS. Một người lính đánh thuê hoạt động dưới lực lượng đặc biệt JSS, anh được JSS bao che, 
                            đặt tên là Kim Je-ha/K2 để che giấu tên thật. Je-ha làm việc cho Yoo Jin, lúc đầu, anh bảo vệ cho Yoo Jin, 
                            nhưng dần dần nhìn thấy những việc độc ác mà Yoo Jin đã và đang làm, anh đã dần rời xa cô và đến với Anna.</p>
                        </div> 
                </div>
            </div>
            <div className="new_list">
                    <h3>Top 8 bộ phim Ji Chang Wook hay được yêu thích nhất</h3>
                    <div className="news_item">
                
                        <img src={logo6} alt="" className='news_img'/>
                        <div className="content">
                        
                        <p>Ji Chang Wook là một diễn viên trẻ tài năng. Anh được đánh giá cao bởi công chúng và truyền thông Hàn Quốc và nổi tiếng với danh hiệu 
                            "nam diễn viên có đời sống cá nhân trong sạch nhất". Sự hâm mộ của khán giả dành cho anh không chỉ xuất phát từ tài năng diễn xuất và 
                            đời sống cá nhân mà còn từ những nỗ lực và cố gắng không ngừng của anh trong sự nghiệp. Điều này khiến Ji Chang Wook trở thành một ngôi sao đa tài,
                             không chỉ xuất sắc trong diễn xuất mà còn có khả năng ca hát không kém phần chuyên nghiệp.</p>
                        </div> 
                </div>
            </div>
            <div className="new_list">
            <div class="news_item">
                <h3>Ji Chang Wook: Mỹ nam màn ảnh Hàn đa tài được yêu mến</h3>
                <div class="content">
                    <img src={logo7} alt="" class='news_img'/>
                    <p>Ji Chang Wook là một diễn viên trẻ tài năng. Anh được đánh giá cao bởi công chúng và truyền thông Hàn Quốc và nổi tiếng với danh hiệu 
                        "nam diễn viên có đời sống cá nhân trong sạch nhất". Sự hâm mộ của khán giả dành cho anh không chỉ xuất phát từ tài năng diễn xuất và 
                        đời sống cá nhân mà còn từ những nỗ lực và cố gắng không ngừng của anh trong sự nghiệp. Điều này khiến Ji Chang Wook trở thành một ngôi 
                        sao đa tài, không chỉ xuất sắc trong diễn xuất mà còn có khả năng ca hát không kém phần chuyên nghiệp.</p>
                </div> 
            </div>
            </div>
            <div className="new_list">
            <div class="news_item">
                <h3>Phim Hàn 'Welcome to Samdalri' hứa hẹn thu hút khán giả trên Netflix</h3>
                <div class="content">
                    <img src={logo8} alt="" class='news_img'/>
                    <p>Bộ phim kể về Jo Yong Pil, một nhà dự báo thời tiết, và Jo Sam Dal, một người bạn thời thơ ấu của Yong Pil. Sau khi sự nghiệp thời trang 
                        của Sam Dal gặp trục trặc, cô quyết định trở về quê nhà Samdalri. Sự gặp lại này đã đánh thức những tình cảm cũ và tạo ra những biến đổi
                         đáng chú ý trong cuộc sống của cả hai.
                    Vai trò của Cho Yong Pil do nam diễn viên Ji Chang Wook thể hiện, người đã gặt hái thành công với nhiều bộ phim truyền hình Hàn Quốc 
                    trên Netflix như The Sound of Magic, Tình yêu chốn đô thị, Cửa hàng tiện lợi Saet Byul, Gỡ rối tình yêu và The K2.</p>
                </div> 
            </div>
            </div>
            
        </>
    );
};