import React from 'react';
import './PricingPage.css';
import PricingCards from '../../components/PricingCards/PricingCards';
import { Link } from 'react-router-dom';

function PricingPage() {
    const priceData = [
        {
            plan: "FREE",
            price: 0,
            storage: "25GB storage",
            isStorage: true,
            publicProjects: "Q&A",
            isPublicProjects: true,
            communityAccess: "Summarizer",
            isCommunityAccess: true,
            privateProjects: "20 File Uploads",
            isPrivateProjects: true,
            phoneSupport: "24/7 Support",
            isPhoneSupport: false,
            offline: "Offline Access",
            isOffline: false,
            reports: "Customized Study Plan",
            isReports: false,
            history: "Textbook Solutions",
            isHistory: false
        },
        {
            plan: "PLUS",
            price: 24.99,
            storage: "500GB storage",
            isStorage: true,
            publicProjects: "Q&A",
            isPublicProjects: true,
            communityAccess: "Summarizer",
            isCommunityAccess: true,
            privateProjects: "Unlimited File Uploads",
            isPrivateProjects: true,
            phoneSupport: "24/7 Priority Support",
            isPhoneSupport: true,
            offline: "Offline Access",
            isOffline: true,
            reports: "Customized Study Plan",
            isReports: true,
            history: "Textbook Solutions",
            isHistory: true
        }
    ];

    return (
        <section className="pricing py-5">
            <h1 className='pricing-title'>Pricing</h1>
            <div className="container">
                <div className="row">
                    {priceData.map((e, i) => {
                        return <PricingCards cardData={e} key={i} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default PricingPage;
