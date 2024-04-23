import React from 'react';
import './PricingPage.css';
import PricingCards from '../../components/PricingCards/PricingCards';
import { Link } from 'react-router-dom';

function PricingPage() {
    const priceData = [
        {
            plan: "FREE",
            price: 0,
            user: "Single User",
            isUser: true,
            storage: "25GB storage",
            isStorage: true,
            publicProjects: "Q&A",
            isPublicProjects: true,
            communityAccess: "Community Access",
            isCommunityAccess: true,
            privateProjects: "20 File Uploads",
            isPrivateProjects: true,
            phoneSupport: "24/7 Support",
            isPhoneSupport: false,
            offline: "Offline Access",
            isOffline: false,
            reports: "Export Reports",
            isReports: false,
            history: "180-Day History",
            isHistory: false
        },
        {
            plan: "PLUS",
            price: 4.99,
            user: "5 Users",
            isUser: true,
            storage: "500GB storage",
            isStorage: true,
            publicProjects: "Q&A",
            isPublicProjects: true,
            communityAccess: "Community Access",
            isCommunityAccess: true,
            privateProjects: "Unlimited File Uploads",
            isPrivateProjects: true,
            phoneSupport: "24/7 Priority Support",
            isPhoneSupport: true,
            offline: "Offline Access",
            isOffline: true,
            reports: "Export Reports",
            isReports: true,
            history: "180-Day History",
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
