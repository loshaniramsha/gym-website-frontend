import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);

        // Simulating a fake submission delay
        setTimeout(() => {
            alert("Message sent successfully!");
            setLoading(false);
            setName("");
            setEmail("");
            setMessage("");
        }, 2000);
    };

    return (
        <section className="contact">
            <form onSubmit={handleSubmit}>
                <h1>CONTACT US</h1>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        placeholder="Name"
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label>Message</label>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        placeholder="Message"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                    }}
                >
                    {loading ? <ClipLoader size={20} color="white" /> : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default Contacts;
