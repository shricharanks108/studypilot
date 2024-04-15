import React from 'react'

function PricingCards({ cardData }) {
    // const {cardData} = props     //instead of giving props in parameter and then destructuring(as shown in this line) the props value in {cardData} variable, we can simply give as {cardData} in paramter
    // console.log(cardData);       // after destructing, in console it will the display objs data alone , with destructing it will show a obj inside to cardData where the obj details will be held.
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{cardData.plan}</h5>
                    <h6 className="card-price text-center">${cardData.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li className={cardData.isUser ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isUser ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.plan !== "FREE" ? <b>{cardData.user}</b> : <>{cardData.user}</>}</li>
                        <li className={cardData.isStorage ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isStorage ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.storage}</li>
                        <li className={cardData.isPublicProjects ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isPublicProjects ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.publicProjects}</li>
                        <li className={cardData.isCommunityAccess ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isCommunityAccess ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.communityAccess}</li>
                        <li className={cardData.isPrivateProjects ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isPrivateProjects ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.privateProjects}</li>
                        <li className={cardData.isPhoneSupport ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isPhoneSupport ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.phoneSupport}</li>
                        <li className={cardData.isSubDomian ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isSubDomian ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.plan === "PRO" ? <><b>Unlimited</b> {cardData.subDomian}</> : <>{cardData.subDomian}</>}</li>
                        <li className={cardData.isReports ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isReports ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.reports}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Soar Ahead!</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PricingCards