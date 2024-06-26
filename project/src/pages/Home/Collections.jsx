const Collections = () => {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
      <div className="min-h-[580px] flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 w-full"></div>
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/images/zara-logo.png"
            alt=""
            className="max-w-full md:max-w-[320px] h-auto mx-auto"
          />
          <p className="text-lg text-white capitalize my-8 md:w-2/3 w-full leading-[32px] px-2 md:px-0">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="bg-white text-Brand font-normal px-6 py-2 mt-4 mb-4 capitalize rounded hover:text-white hover:bg-Brand transition-all duration-300">
            See collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
