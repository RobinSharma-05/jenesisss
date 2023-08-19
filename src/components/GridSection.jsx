import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Discord, Instagram, Twitter, Close, Manu } from './Icon'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Genesis from '../assets/png/Genesis.webp'
import MANY_YEARS from '../assets/png/MANY_YEARS.webp'
import L_vs_p from '../assets/png/L_vs_p.webp'
import THIS_ARTIST from '../assets/png/THIS_ARTIST.webp'
import designed_to_decorate from '../assets/png/designed_to_decorate.webp'
import img_2004 from '../assets/png/img_2004.webp'
import img_2005 from '../assets/png/img_2005.webp'
import img_2006 from '../assets/png/img_2006.webp'
import img_2006_1 from '../assets/png/img_2006.webp'
import img_2007 from '../assets/png/img_2007.webp'
import img_2008 from '../assets/png/img_2008.webp'
import img_2010 from '../assets/png/img_2010.webp'
import pop_art_idea from '../assets/png/pop_art_idea.webp'
import girl_img_1 from '../assets/png/girl_img_1.webp'
import girl_img_2 from '../assets/png/girl_img_2.webp'
import girl_img_3 from '../assets/png/girl_img_3.webp'
import girl_img_4 from '../assets/png/girl_img_4.webp'
import girl_img_5 from '../assets/png/girl_img_5.webp'
import girl_img_6 from '../assets/png/girl_img_6.webp'
import girl_img_7 from '../assets/png/girl_img_7.webp'
import girl_img_8 from '../assets/png/girl_img_8.webp'
import girl_img_9 from '../assets/png/girl_img_9.webp'
import Mcmanus from '../assets/png/Mcmanus.webp'
import three_people_img from '../assets/png/three_people_img.webp'
import Arts from '../assets/png/Arts.webp'
import exhibitions from '../assets/png/exhibitions.webp'
import img_2011_14 from '../assets/png/img_2011-14.webp'
import potts_point from '../assets/png/potts_point.webp'
import Leon_gallery from '../assets/png/Leon_gallery.webp'
import couple_img from '../assets/png/couple_img.webp'
import soto_art from '../assets/png/soto_art.webp'
import Style_news from '../assets/png/Style_news.webp'
import digital_divide from '../assets/png/digital_divide.webp'
import Leon_krasenstein from '../assets/png/Leon_krasenstein.webp'
import couple_img_2 from '../assets/png/couple_img_2.webp'
import couple_img_3 from '../assets/png/couple_img_3.webp'
import drawing_a_crowd from '../assets/png/drawing_a_crowd.webp'

const GridSection = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className='bg_gradient overflow-hidden'>

            <div className='pt-5 my-container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <ul className='d-flex align-items-center mb-0 gap-4'>
                        <li><Link to="https://www.instagram.com/"><Instagram /></Link></li>
                        <li><Link to="https://www.discord.com/"><Discord /></Link></li>
                        <li><Link to="https://www.twitter.com/"><Twitter /></Link></li>
                    </ul>
                    <div className='d-lg-none d-block'>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100 position-relative'
                                onClick={() => setMenu(false)}>
                                <div className='absolute-cross'>
                                    <Link><Close /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100'
                                onClick={() => setMenu(false)}>
                                <div className='absolute-cross'>
                                    <Link><Close /></Link>
                                </div>
                            </div>

                            <ul className='d-flex align-items-center gap-5'>
                                <li className='mb-0'><NavLink className="text_black">Home</NavLink></li>
                                <li className='mb-0'><NavLink className="text_black">OUR STORY</NavLink></li>
                                <li className='mb-0'><NavLink className="text_black">Roadmap</NavLink></li>
                                <li className='mb-0'><NavLink className="text_black">Traits</NavLink></li>
                                <li className='mb-0'><NavLink className="text_black">Team</NavLink></li>
                                <li className='mb-0'><NavLink to="/genesis" className="text_black">Genesis</NavLink></li>
                                <li className='mb-0'><NavLink className="text_black">FAQs</NavLink></li>
                            </ul>

                        </div>
                    </div>
                    <div className=' d-none d-lg-block'>
                        <ul className='d-flex align-items-center gap-5'>
                            <li><NavLink className="text_black">Home</NavLink></li>
                            <li><NavLink className="text_black">OUR STORY</NavLink></li>
                            <li><NavLink className="text_black">Roadmap</NavLink></li>
                            <li><NavLink className="text_black">Traits</NavLink></li>
                            <li><NavLink className="text_black">Team</NavLink></li>
                            <li><NavLink to="/genesis" className="text_black">Genesis</NavLink></li>
                            <li><NavLink className="text_black">FAQs</NavLink></li>
                        </ul>
                    </div>
                    <div className='d-lg-none'>
                        <Link onClick={() => setMenu(true)}>
                            <Manu /></Link>
                    </div>
                </div>
            </div>

            <div className='overdflow-hidden mycontainer px-3 py-5'>
                <Row className='py-5 mb_5 center_timeline'>
                    <Col lg={6} className='pe-0 pb-5'>
                        <div className='d-flex align-items-center justify-content-lg-end pt-3' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" >
                            <img src={Genesis} alt="" />
                        </div>
                        <img className='pt-4 ps-2 ms-sm-5 pb-3' src={MANY_YEARS} alt="" data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />
                        <div className='d_grid d-grid'>
                            <div className='designed_to_decorate ms-5 pt-5 pe-3' data-aos="fade-up" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={designed_to_decorate} alt="" />
                            </div>
                            <div className=' img_2004 pt-4 ps-4' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={img_2004} alt="" />
                            </div>
                            <div className=' img_2006 pt-5 mt-3' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={img_2006} alt="" />
                            </div>
                            <div className=' pop_art_idea ps-4 pe-4 mt-4' data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={pop_art_idea} alt="" />
                            </div>
                            <div className='girl_img_1 pt-5' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={girl_img_1} alt="" />
                            </div>
                            <div className='girl_img_2 mx-3 py-5' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={girl_img_2} alt="" />
                            </div>
                            <div className='Mcmanus mx-4 pe-sm-4 py-5' data-aos="zoom-out" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={Mcmanus} alt="" />
                            </div>
                            <div className='img_2007' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={img_2007} alt="" />
                            </div>
                            <div className='three_people_img  ms-5 pe-3 py-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={three_people_img} alt="" />
                            </div>
                            <div className='Arts pe-sm-5 pb-5 pb-sm-0 mx-5' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={Arts} alt="" />
                            </div>
                            <div className='girl_img_3 pe-sm-5 pe-3' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={girl_img_3} alt="" />
                            </div>
                            <div className='exhibitions pt-sm-5 mt-5 pe-4 ps-sm-5 ms-sm-5' data-aos="fade-up" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={exhibitions} alt="" />
                            </div>
                            <div className='img_2011-14 pt-5 pb-sm-5 pe-5 pe-sm-0 ps-sm-5 ms-sm-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={img_2011_14} alt="" />
                            </div>
                            <div className='girl_img_4 py-4 ps-sm-5 pe-2 pe-sm-0' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={girl_img_4} alt="" />
                            </div>
                            <div className='potts_point py-5  mt_5 pe-4 ps-4' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={potts_point} alt="" />
                            </div>
                            <div className='Leon_gallery ps-sm-5 pe-2 pe-sm-0' data-aos="fade-up" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={Leon_gallery} alt="" />
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <img className='pt-5 L_vs_p' src={L_vs_p} alt="L_vs_p" />
                        <img className='ps-sm-5 mx-sm-5 pt-5 this_artist' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" src={THIS_ARTIST} alt="" />

                        <div className='d-grid d_grid'>
                            <div className='img_2005 mx-sm-3 pt-5' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={img_2005} alt="" />
                            </div>
                            <div className='girl_img_5 ms-sm-2 pt-5 pt-sm-0 pe-3 pe-sm-0' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={girl_img_5} alt="" />
                            </div>
                            <div className='girl_img_6 ms-sm-5 pe-3 pe-sm-5 pt-sm-2 pt-5' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={girl_img_6} alt="" />
                            </div>
                            <div className='couple_img ms-sm-4 pe-3 pt-5' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={couple_img} alt="" />
                            </div>
                            <div className='soto_art ms-sm-4 pe-3 ps-1 pt-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={soto_art} alt="" />
                            </div>
                            <div className='Style_news ms-sm-4 pt-5 pe-3' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={Style_news} alt="" />
                            </div>
                            <div className='img_2006_1 ms-sm-3 pe-5 pe-sm-0 pt-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={img_2006_1} alt="" />
                            </div>
                            <div className='girl_img_7 pt-sm-0 pt-5 mx-sm-5 pe-sm-5 pe-3' data-aos="zoom-out" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={girl_img_7} alt="" />
                            </div>
                            <div className='digital_divide ps-sm-5 ms-sm-5 mt-4 pe-sm-2 pe-3' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={digital_divide} alt="" />
                            </div>
                            <div className='Leon_krasenstein pt-5 mx-sm-5 pe-3 pe-sm-0' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={Leon_krasenstein} alt="" />
                            </div>
                            <div className='couple_img_2 pe-3 pe-sm-0 pt-5 ms-sm-5 ps-sm-4' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={couple_img_2} alt="" />
                            </div>
                            <div className='img_2008 pt-5 mx-sm-3 pb-4 pe-5 pe-sm-0 pb-sm-0' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={img_2008} alt="" />
                            </div>
                            <div className='couple_img_3 pt-4 pb-4 pe-3 pe-sm-0 pb-sm-0' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={couple_img_3} alt="" />
                            </div>
                            <div className='img_2010 pt-4 mx-sm-3 pe-5 pe-sm-0 pb-4' data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={img_2010} alt="" />
                            </div>
                            <div className='girl_img_8 pt-5 ms-sm-5 pe-3' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={girl_img_8} alt="" />
                            </div>
                            <div className='girl_img_9 pe-3 pe-sm-0' data-aos="fade-up" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100 mt-5' src={girl_img_9} alt="" />
                            </div>
                            <div className='drawing_a_crowd pt-sm-4 pt-5 mt-5 mt-sm-0 ms-sm-5 pe-3' data-aos="fade-up" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 h-100' src={drawing_a_crowd} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </div >
    )
}

export default GridSection