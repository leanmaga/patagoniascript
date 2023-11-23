import styles from '../styles';

const StartStep = ({ imgUrl, title, subtitle }) => (

  <div className="flex-1 flex items-center sm:max-w-[500px] min-w-[600px] ">

    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >

      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />

    </div>

    <h1 className="m-[26px] mr-[1rem] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>

    <p className="flex-1 m-[16px]  font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>

  </div>
);

export default StartStep;