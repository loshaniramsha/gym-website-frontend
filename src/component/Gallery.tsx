
const Gallery = () => {
    const galleryImages = [
        "public/img/img1.png",
        "public/img/img2.png",
        "public/img/img3.png",
        "public/img/img4.png",
        "public/img/img5.png",
        "public/img/img6.png"
    ];

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
