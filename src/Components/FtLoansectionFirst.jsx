import React from 'react'

const FtLoansectionFirst = () => {
  return (
   <div>     <section className="per__wrapper">
    <div className="row">
      <div className="col-md-6 order-2 order-md-1">
        <div className="ft__bannerDescriptionWrapper">
          <h1>Personal loans<br />up to $20,000</h1>
          <h4>We offer personal loans that range from $500 up to $20,000. Rates starting from 29.99%</h4>
          <p>We offer personalized products and affordable payment plans. We work with our customers to
            find a plan that best suits their needs and budget with terms up to 84 months</p>
          <div className="ft__btnWrapper">
            <button className="ft__btn">
              Get Started
              <span className="icon__arrow">
                <img src="/assets/personalLoan/-img/icon-arrow-right.svg" alt="" />
              
             
              </span>
            </button>     
          </div>
        </div>
      </div>
      <div className="col-md-6 order-1 order-md-2">
        <div className="ft__infoBannerInfographWrap">
          {/* <img src="/public/p-img/hero-banner-image.png" alt="Finance That Hero Banner Infograph" /> */}
          <img src="/assets/personalLoan/hero-banner-image.png" alt="Finance That Hero Banner Infograph" />
        </div>
      </div>
    </div>
  </section></div>

  )
}

export default FtLoansectionFirst