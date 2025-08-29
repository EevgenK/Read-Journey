import s from './PhoneImage.module.css';
import phone from '../../assets/images/iphone_dk.webp';
import phoneX from '../../assets/images/iphone_dk@2x.webp';
import phoneMobile1x from '../../assets/images/iphone_mob.webp';
import phoneMobile2x from '../../assets/images/iphone_mob@2x.webp';
const PhoneImage = () => {
  return (
    <picture>
      <source
        srcSet={`${phone} 1x, ${phoneX} 2x`}
        media="(min-width: 1440px)"
        sizes="405px"
      />
      <source
        srcSet={`${phoneMobile1x} 1x, ${phoneMobile2x} 2x`}
        media="(max-width: 767px)"
        sizes="335px"
      />
      <img
        className={s.phone_img}
        src={phoneMobile1x}
        alt="App on phone"
        loading="lazy"
      />
    </picture>
  );
};

export default PhoneImage;
