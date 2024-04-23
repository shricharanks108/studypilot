import React from 'react';
import { Link } from 'react-router-dom';

function PricingCards({ cardData }) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{cardData.plan}</h5>
                    <h6 className="card-price text-center">${cardData.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li className={cardData.isStorage ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isStorage ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.storage}</li>
                        <li className={cardData.isPublicProjects ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isPublicProjects ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.publicProjects}</li>
                        <li className={cardData.isCommunityAccess ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isCommunityAccess ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.communityAccess}</li>
                        <li className={cardData.isPrivateProjects ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isPrivateProjects ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.privateProjects}</li>
                        <li className={cardData.isPhoneSupport ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isPhoneSupport ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.phoneSupport}</li>
                        <li className={cardData.isOffline ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isOffline ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.plan === "PRO" ? <><b>Unlimited</b> {cardData.offline}</> : <>{cardData.offline}</>}</li>
                        <li className={cardData.isReports ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isReports ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.reports}</li>
                        <li className={cardData.isHistory ? "" : "text-muted"}><span className="fa-li"><i className={cardData.isHistory ? "fas fa-check" : "fas fa-times"}></i></span>{cardData.history}</li>
                    </ul>
                    <div className="d-grid">
                        <Link to="/sign-up" className="btn btn-primary text-uppercase">Soar Ahead!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingCards;
