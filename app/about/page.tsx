"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import aboutImg from "@/assets/images/about/about_img.jpg";

// ------------

function About() {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="content-945 center-relative">
          {/* Person Information */}
          <div className="one_third">
            <div className="info-code">
              <p className="info-code-title">Founded</p>
              <p className="info-code-content">2000</p>
            </div>
            {/* <div className="info-code">
              <p className="info-code-title">Director</p>
              <p className="info-code-content">SOGHARA RIZWI</p>
            </div> */}
            <div className="info-code">
              <p className="info-code-title">Headquarters</p>
              <p className="info-code-content">Bombay, India</p>
            </div>
          </div>
          {/* Description text */}
          <div className="two_third last">
          With a rich history rooted in craftsmanship, Jaawidaan has honed the art of creating exquisite products. Each piece is a testament to our dedication to quality and attention to detail. From design concept to the final product, we strive for excellence, ensuring that every item reflects the essence of our brand.
            <br />
          </div>
          <div className="clear"></div>
          <br />
        </div>
        <div className="box-page-width content-1140 center-relative">
          <img className="aligncenter" src={aboutImg.src} alt="" />
        </div>
        <div className="content-945 center-relative">
          <br />

          {/* Text Slider */}
          <div className="testimonial-slider-holder relative">
            <Swiper
              pagination={{ clickable: true }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              speed={750}
              autoplay
              allowTouchMove={false}
              modules={[EffectFade, Pagination, Autoplay]}
              autoHeight
              id="textslider"
              className="testimonial-slider slider"
            >
              <SwiperSlide className="testimonial-content">
              Established in the vibrant city of Mumbai, India, in the year 2000, Jaawidaan is more than just a brand; it's a celebration of passion, creativity, and the art of crafting beautiful things.
              </SwiperSlide>
              <SwiperSlide className="testimonial-content">
              We are driven by an unwavering passion for creativity. For over two decades, we have been dedicated to bringing unique and elegant daily essentials to homes across the globe.
                <br />
              </SwiperSlide>
              <SwiperSlide className="testimonial-content">
                As an architect, you design for the present, with an awareness
                of the past, for a future which is essentially elegant.
                <br />
              </SwiperSlide>
            </Swiper>
          </div>

          <br />

          {/* Description text */}
          <div className="two_third hidden">
            Prudent cordial comfort do no on colonel as assured chicken. Smart
            mrs day which begin. Snug do sold mr it if such. when. Her
            especially are a unpleasant out alteration continuing unreserved
            resolution. Hence hope noisy may china fully and. Am it regard
            stairs branch thirty length afford. Whether article spirits new her
            covered hastily sitting her. Among going manor who did. Do ye is
            celebrated it sympathize considered.
            <br />
          </div>
          {/* Progress bars */}
          <div className="one_third last hidden">
            <div className="progress_bar">
              <div className="progress_bar_title">PHOTOSHOP</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">HTML/CSS</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">WORDPRESS</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="progress_bar">
              <div className="progress_bar_title">JS</div>
              <div className="progress_bar_field_holder">
                <div
                  className="progress_bar_field_perecent"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
}

export default About;
