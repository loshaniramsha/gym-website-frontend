import { useState } from "react";
import { ClipLoader } from "react-spinners";
import emailjs from "@emailjs/browser"; // Import EmailJS properly

const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // EmailJS parameters
        const params = {
            name,
            email,
            message,
        };

        try {
            await emailjs.send(
                "service_cayc3ow", // Your Service ID
                "template_oj9kc69", // Your Template ID
                params,
                "nTMW-4sMRwuw5LZt1" // Your Public Key
            );
            alert("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
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
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        placeholder="Your message here..."
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
