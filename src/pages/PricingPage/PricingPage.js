import './PricingPage.css';
import PricingCards from '../../components/PricingCards/PricingCards';

function PricingPage() {

    let priceData = [
        {
            plan: "FREE",
            price: 0,
            user: "Single User",
            isUser: true,
            storage: "5GB storage",
            isStorage: true,
            publicProjects: "Q&A",
            isPublicProjects: true,
            communityAccess: "Community Access",
            isCommunityAccess: true,
            privateProjects: "20 File Uploads",
            isPrivateProjects: true,
            phoneSupport: "24/7 Support",
            isPhoneSupport: false,
            subDomian: "Free Subdomain",
            isSubDomian: false,
            reports: "Monthly Status Reports",
            isReports: false
        },
        {
            plan: "PLUS",
            price: 5,
            user: "5 Users",
            isUser: true,
            storage: "50GB storage",
            isStorage: true,
            publicProjects: "Q&A",
            isPublicProjects: true,
            communityAccess: "Community Access",
            isCommunityAccess: true,
            privateProjects: "Unlimited File Uploads",
            isPrivateProjects: true,
            phoneSupport: "24/7 Support",
            isPhoneSupport: true,
            subDomian: "Free Subdomain",
            isSubDomian: true,
            reports: "Monthly Status Reports",
            isReports: false
        },
        {
            plan: "PRO",
            price: 10,
            user: "Unlimited Users",
            isUser: true,
            storage: "150GB storage",
            isStorage: true,
            publicProjects: "Q&A",
            isPublicProjects: true,
            communityAccess: "Community Access",
            isCommunityAccess: true,
            privateProjects: "Unlimited File Uploads",
            isPrivateProjects: true,
            phoneSupport: "24/7 Support",
            isPhoneSupport: true,
            subDomian: "Free Subdomain",
            isSubDomian: true,
            reports: "Monthly Status Reports",
            isReports: true
        }
    ]

    return (
        <section className="pricing py-5">
            <h1 className='pricing-title'>Pricing</h1>
            <div className="container">
                <div className="row">
                    {
                        priceData.map((e, i) => {
                            return <PricingCards cardData={e} key={i} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default PricingPage;