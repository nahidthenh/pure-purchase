import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Pagination } from 'swiper/modules';

import { Banner1, Banner2, Banner3, Banner4 } from '../../assets/image/banner/banner'

const Slider = () => {
    return (
        <div>
            <Swiper
                effect={'fade'}
                spaceBetween={30}
                pagination={true}
                modules={[EffectFade, Pagination]}
                className="mySwiper">
                <SwiperSlide className='slider-item'>
                    <img className='img-fluid' src={Banner2} alt="SLider image 1" />
                </SwiperSlide>
                <SwiperSlide className='slider-item'>
                    <img className='img-fluid' src={Banner3} alt="SLider image 2" />
                </SwiperSlide>
                <SwiperSlide className='slider-item'>
                    <img className='img-fluid' src={Banner4} alt="SLider image 3" />
                </SwiperSlide>
                <SwiperSlide className='slider-item border'>
                    <img className='img-fluid' src={Banner1} alt="SLider image 4" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;