import gym_grl from "../assets/img/gym-grl.png";

const WorkOutSession = () => {
    return (
        <section className="work_session">
            <div className="wrapper">
                <h1>TOP WORKOUT SESSION</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa dicta dolore dolorem
                    dolores id impedit ipsa, libero magni, maxime modi nam officia placeat quidem ratione totam vero
                    voluptate voluptates?
                </p>
                <img src={gym_grl} alt="Workout Girl" />
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMPS</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error nam perspiciatis tempore! Aut corporis
                    enim illo quas quo voluptatem. Earum error facilis fugit inventore nam, odio placeat soluta voluptate?
                </p>
                <div className="bootcamps">
                    {[...Array(7)].map((_, index) => (
                        <div key={index}>
                            <h4>Exciting Bootcamp Sessions</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius error eum eveniet nesciunt
                                nihil nostrum perspiciatis porro similique! Provident qui quod unde. Asperiores consequuntur, iure?
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkOutSession;
