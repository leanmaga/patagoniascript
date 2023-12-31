import styles from '../styles';

const StartStep = ({ imgUrl, title, subtitle }) => (

  <div className="flex flex-col justify-center text-center items-center sm:max-w-[500px] lg:min-w-[600px] ">

    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >

      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      
    </div>

    <h1 className="font-bold text-[28px] p-[1rem] text-white">
      {title}
    </h1>

    <p className="font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>

  </div>
  
);

export default StartStep;