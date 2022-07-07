import React from 'react'

const FtLoanthirdsection = () => {

  return (
<div>
  <section className="ft__perloanWrapper">
    <div className="container">
      <div className="ft__sectionHeader">
        <h2>What can you use a Personal loan for?</h2>
      </div>
      <div className="ft__loanFeaturesListWrapper">
        <div className="dots__imageTopWrap">
          <img src="/assets/personalLoan/dots-orange.svg" alt="" />
        </div>
        <div className="ft__loanFeaturesListInner">
          <div className="row">
            {/* <div className="col-md-4 ft__featureGridWrap">
              <div style={{boxShadow: "0px 0px 18px rgba(108, 126, 147, 0.15) "}} className="ft__featureGrid">
                <div className="ft__featureGridIcon">
                  <img src="/assets//icon-debt-consolidation.svg" alt="" />
                </div>
                <h3>Debt<br />Consolidation</h3>
              </div>
            </div> */}
            <div   className="col-md-4 ft__featureGridWrap">
              <div style={{boxShadow: "0px 0px 18px rgba(108, 126, 147, 0.15) "}} className="ft__featureGrid">
                <div className="ft__featureGridIcon">
                  <img src="/assets/personalLoan/icon-emergency-expenses.svg" alt="" />
                </div>
                <h3>Cover emergency<br />expenses</h3>
              </div>
            </div>
            <div   className="col-md-4 ft__featureGridWrap">
              <div style={{boxShadow: "0px 0px 18px rgba(108, 126, 147, 0.15) "}} className="ft__featureGrid">
                <div className="ft__featureGridIcon">
                  <img src="/assets/personalLoan/icon-emergency-expenses.svg" alt="" />
                </div>
                <h3>Debt<br />Consolidation</h3>
              </div>
            </div>
            <div  className="col-md-4 ft__featureGridWrap">
              <div style={{boxShadow: "0px 0px 18px rgba(108, 126, 147, 0.15) "}} className="ft__featureGrid">
                <div className="ft__featureGridIcon">
                  <img src="/assets/personalLoan/icon-repair-renovations.svg" alt="" />
                </div>
                <h3>Home repairs<br />and renovations</h3>
              </div>
            </div>
            <div className="col-md-4 ft__featureGridWrap">
              <div style={{boxShadow: "0px 0px 18px rgba(108, 126, 147, 0.15) "}} className="ft__featureGrid">
                <div className="ft__featureGridIcon">
                  <img src="/assets/personalLoan/icon-car-repairs.svg" alt="" />
                </div>
                <h3>Car repairs<br />or maintenance</h3>
              </div>
            </div>
            <div  className="col-md-4 ft__featureGridWrap">
              <div style={{boxShadow: "0px 0px 18px rgba(108, 126, 147, 0.15) "}} className="ft__featureGrid">
                <div className="ft__featureGridIcon">
                  <img src="/assets/personalLoan/icon-trip-expenses.svg" alt="" />
                </div>
                <h3>Manage<br />Trip Expenses</h3>
              </div>
            </div>
            <div  className="col-md-4 ft__featureGridWrap">
              <div style={{boxShadow: "0px 0px 18px rgba(108, 126, 147, 0.15) "}} className="ft__featureGrid">
                <div className="ft__featureGridIcon">
                  <img src="./assets/personalLoan/icon-veterinarian-bills.svg" alt="" />
                </div>
                <h3>Pets<br />veterinarian bills</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="dots__imageBottomWrap">
          <img src="./assets/personalLoan/dots-purple.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default FtLoanthirdsection
