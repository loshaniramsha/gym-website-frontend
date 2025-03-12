import { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [gender, setGender] = useState("");
    const [bmiValue, setBmi] = useState(0);

    const calculateBMI = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!height || !weight || !gender) {
            toast.error("Please enter a valid height, weight, and gender.");
            return;
        }

        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters));
        setBmi(bmi);

        if (bmi < 18.5) {
            toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
        } else if (bmi >= 18.5 && bmi < 24.9) {
            toast.success("You have a normal weight. Keep maintaining a healthy lifestyle.");
        } else if (bmi >= 25 && bmi < 29.9) {
            toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
        } else {
            toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
        }
    };

    return (
        <section className="bmi">
            <h1>BMI CALCULATOR</h1>
            <div className="container">
                <div className="wrapper">
                    <form onSubmit={calculateBMI}>
                        <div>
                            <label>Height (cm)</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(Number(e.target.value))}
                                required
                            />
                        </div>
                        <div>
                            <label>Weight (kg)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(Number(e.target.value))}
                                required
                            />
                        </div>
                        <div>
                            <label>Gender</label>
                            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <button type="submit">Calculate BMI</button>
                    </form>
                    {bmiValue && <p className="bmi-result">Your BMI: {bmiValue}</p>}
                </div>
                <div className="wrapper">
                    <img src="/src/assets/img/bmi-img.png" alt="BMI Illustration" />
                </div>
            </div>
        </section>
    );
};

export default BMICalculator;
