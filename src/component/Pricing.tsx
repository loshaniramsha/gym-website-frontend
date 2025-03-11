import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const pricingPlans = [
        {
            imgUrl: "public/img/gym-girl-contact.png",
            title: "QUARTERLY",
            price: 10000,
            length: 3,
        },
        {
            imgUrl: "/img/gym-girl-contact.png",
            title: "HALF_YEARLY",
            price: 34000,
            length: 6,
        },
        {
            imgUrl: "img/gym-girl-contact.png",
            title: "YEARLY",
            price: 670000,
            length: 12,
        },
    ];

    return (
        <section className="pricing">
            <h1>ELITE EDGE FITNESS PLANS</h1>
            <div className="wrapper">
                {pricingPlans.map((plan) => (
                    <div className="card" key={plan.title}>
                        <img src={plan.imgUrl} alt={plan.title} />
                        <div className="title">
                            <h1>PACKAGE</h1>
                            <h3>Rs {plan.price}</h3>
                            <p>For {plan.length} Months</p>
                        </div>
                        <div className="description">
                            <p>
                                <Check /> Equipment
                            </p>
                            <p>
                                <Check /> All Day Training
                            </p>
                            <p>
                                <Check /> Free Restore
                            </p>
                            <p>
                                <Check /> 24/7 Skilled Support
                            </p>
                            <p>
                                <Check /> 20 Days Freezing Option
                            </p>
                            <Link to={"/"} className="join-btn">
                                Join Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
