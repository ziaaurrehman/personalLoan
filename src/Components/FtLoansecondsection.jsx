import React from 'react'

const FtLoansecondsection = () => {
    const data=[
        {
            title:"Fast access to money",
            heading:"With Interac® e-Transfer, get your money in as little as 2 hours after getting approved."
            
        },
        {
            title:"Flexible loan options",
            heading:"We offer personalized rates and payment terms to help you find a solution that fiyour budget. If you’re able, you can pay off your loan at any time with no penaltyand save the interest. Plus, you can get a 2% rate reduction with a co-applicant."
            
        },  
        {
            title:"Apply without affecting your credit score",
            heading:"Apply in minutes to find out how much you could qualify for. There is no commitment and it won’t affect your credit score."
            
        },
        {
            title:"Rebuild your credit",
            heading:"Apply in minutes to find out how much you could qualify for. There is no commitment and it won’t affect your credit score."
            
        },
        {
            title:"No credit history needed",
            heading:"If you’re a student or new to Canada, we can help get you approved even with nocredit history."
            
        }

    ]
  return (
   <div><section className="ft__introSectionWrapper">
    <div className="section__header">
      <h2>Benefits of a Personal Loan</h2>
    </div>
    <div className="row">
      <div className="col-md-6 ft__introMockupGrid">
        <div className="ft__introMockupWrap">
          <img src="/assets/personalLoan/intro-image.png" alt="" />
        </div>
      </div>
     
      <div className="col-md-6 ft__introDescGrid">
        <div className="ft__introDescWrap">
        {data.map((el)=>{
        return(
          <>
          <ul>
            <li>
              <h3>{el.title}</h3>
              <p>{el.heading}
                </p>
            </li></ul></>
        
        )
      })}  
          <div className="ft__btnWrapper">
            <button className="ft__btn">
              Get Started
              <span className="icon__arrow">
                <img src="/assets/img/icon-arrow-right.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section></div>

  )
}

export default FtLoansecondsection