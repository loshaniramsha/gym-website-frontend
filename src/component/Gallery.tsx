import img1 from "../assets/img/img1.png"
import img2 from "../assets/img/img2.png"
import img3 from "../assets/img/img3.png"
import img4 from "../assets/img/img4.png"
import img5 from "../assets/img/img5.png"
import img6 from "../assets/img/img6.png"

const Gallery = () => {
    const galleryImages = [img1, img2, img3, img4, img5, img6];

    return (
        <section className="gallery">
            <h1>BETTER BEATS BEST</h1>
            <div className="images">
                {galleryImages.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
