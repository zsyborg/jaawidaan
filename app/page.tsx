"use client";
import { useState } from "react";
// import {FontAwesome} from '@fortawesome/free-solid-svg-icons';
import { fa2, faHeart } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { motion } from "framer-motion";
import Link from "next/link";

// Images
import arrow from "@/assets/images/opta_arrow@2x.png";
import img01 from "@/assets/images/home/img_01.jpg";
import img02 from "@/assets/images/home/img_02.jpg";
import img03 from "@/assets/images/home/img_03.jpg";
import img04 from "@/assets/images/home/img_04.jpg";
import img05 from "@/assets/images/home/img_05.jpg";
import img06 from "@/assets/images/home/img_06.jpg";
import img07 from "@/assets/images/home/img_07.jpg";
import img08 from "@/assets/images/home/img_08.jpg";
import img09 from "@/assets/images/home/img_09.jpg";
import img10 from "@/assets/images/home/img_10.jpg";
import img11 from "@/assets/images/home/img_11.jpg";


/**
 *
 * TODO:
 *  -- start in the documentation structure
 *  -- build documentation using docusource
 */

// ------------

function Home() {
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="page">
      {/* Page intro text */}
      <div className="content-1140 header-content center-relative block">
        <h1 className="entry-title">
          Elegant & Stately, <br/>Buffetware, Tableware, Decor<br/> made with <i className="fa fas fa-heart" style={{color:"red"}} /> Bombay, India.<br/> Creating & Crafting<br/> Circa, 2000
        </h1>
        {/* <p className="page-desc">PETER WALL + COCO BASIC</p> */}
      </div>

      <div id="content" className="site-content">
        {/* Portfolio items */}
        <ul className="grid" id="portfolio">
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img01.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Cutlery
                  </Link>
                  {/* <p className="portfolio-category">
                    <Link href="">Fashion</Link>
                  </p> */}
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img02.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="#">
                    Tableware
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Fashion</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
                <img src={img03.src} alt="" />
              
              
            </div>
          </motion.li>
          {/* Quote Item */}
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item quote-item "
          >
            At Jaawidaan, we redefine luxury in everyday life. We understand that elegance and sophistication should seamlessly integrate into every aspect of your corporate space or home. As a premier provider of exquisite everyday products, we curate a collection that exudes opulence, functionality, and timeless style.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img04.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                    <h3>
                      Kitchenware
                      </h3>
                  
                  
                  {/* <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p> */}
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            {/* <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img05.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Notes
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Branding</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div> */}
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img06.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Building
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Architecture</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className="grid-item element-item "
          >
            <div className="item-wrapper">
              <Link href="/single-portfolio">
                <img src={img07.src} alt="" />
              </Link>
              <div className="portfolio-text-holder">
                <div className="portfolio-info">
                  <Link className="portfolio-text" href="/single-portfolio">
                    Desk
                  </Link>
                  <p className="portfolio-category">
                    <Link href="">Interior</Link>
                  </p>
                  <p className="portfolio-arrow">
                    <Link href="/single-portfolio">
                      <img src={arrow.src} alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
          {/* Items that are hidden and appears when clicking load more button */}
          {loadedAll && (
            <>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img09.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Shoes
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Fashion</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img11.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Mural
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Architecture</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img08.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Vase
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Interior</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="grid-item element-item"
              >
                <div className="item-wrapper">
                  <Link href="/single-portfolio">
                    <img src={img10.src} alt="" />
                  </Link>
                  <div className="portfolio-text-holder">
                    <div className="portfolio-info">
                      <Link className="portfolio-text" href="/single-portfolio">
                        Birds
                      </Link>
                      <p className="portfolio-category">
                        <Link href="">Branding</Link>
                      </p>
                      <p className="portfolio-arrow">
                        <Link href="/single-portfolio">
                          <img src={arrow.src} alt="" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            </>
          )}
        </ul>
        <div className="clear"></div>
        {/* Showing more items buttons */}
        {/* <div className="block center-text load-more-portfolio">
          {!loadedAll && (
            <button className="more-posts-portfolio" onClick={handleLoadAll}>
              Load More
            </button>
          )}
        </div> */}
        <div className="clear"></div>
      </div>
    </main>
  );
}

export default Home;
