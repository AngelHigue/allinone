import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import './css/Speakers.css'
import bg from '../assets/img/background5.jpg'
import imag1 from '../assets/img/5.JPG'
import imag2 from '../assets/img/6.JPG'
import imag3 from '../assets/img/7.JPG'
import imag4 from '../assets/img/4.JPG'
import imag5 from '../assets/img/2.JPG'
import imag6 from '../assets/img/1.JPG'
import imag7 from '../assets/img/3.JPG'
import imag8 from '../assets/img/9.JPG'
import imag9 from '../assets/img/10.JPG'
import imag10 from '../assets/img/8.JPG'
import img from '../assets/img/Recurso 2.png'

export const Speakers = () => {
  const images = [
    {
      original: imag1,
      thumbnail: imag1,
    },
    {
      original: imag2,
      thumbnail: imag2,
    },
    {
      original: imag3,
      thumbnail: imag3,
    },
    {
      original: imag4,
      thumbnail: imag4,
    },
    {
      original: imag5,
      thumbnail: imag5,
    },
    {
      original: imag6,
      thumbnail: imag6,
    },
    {
      original: imag7,
      thumbnail: imag7,
    },
    {
      original: imag8,
      thumbnail: imag8,
    },
    {
      original: imag9,
      thumbnail: imag9,
    },
    {
      original: imag10,
      thumbnail: imag10,
    },
  ]

  return (
    <React.Fragment>
      <section
        style={{
          backgroundImage: "url('" + bg + "')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
        id="speakers">
        <br />
        <br />
        <br />
        <br />
        <div class="row section-header" data-aos="fade-up">
          <div class="col-full">
            <img src={img} alt="" width="700px" />
          </div>
        </div>
        <div class="speaker">
          <ImageGallery items={images} />;
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </React.Fragment>
  )
}
