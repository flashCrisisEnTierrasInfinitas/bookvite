import { useState } from "react";
import "./BookRead.css";

const bookData = [
    {
        img: 'https://www.okchicas.com/wp-content/uploads/2018/10/Libros-con-menos-de-200-paginas-12.jpg',
        title: '',
        text: ''
    },
    {
        img: 'https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg',
        title: 'Book Title 2',
        text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
];

export default function BookRead() {
    const [contZindex, setContZindex] = useState(2);
    const [customZindex, setCustomZindex] = useState(1);
    const [flipClass, setFlipClass] = useState("");

    const handleClick = (e) => {
        const tgt = e.target;
        const unoThis = e.currentTarget;

        unoThis.style.zIndex = contZindex;
        setContZindex((prevZindex) => prevZindex + 1);

        if (tgt.classList.contains("face-front")) {
            unoThis.style.zIndex = contZindex;
            setContZindex((prevZindex) => prevZindex + 20);

            setTimeout(() => {
                unoThis.style.transform = "rotateY(-180deg)";
            }, 500);
        }

        if (tgt.classList.contains("face-back")) {
            unoThis.style.zIndex = contZindex;
            setContZindex((prevZindex) => prevZindex + 20);

            setTimeout(() => {
                unoThis.style.transform = "rotateY(0deg)";
            }, 500);
        }

        if (tgt.getAttribute("id") === "portada") {
            setFlipClass("trnsf");
        }

        if (tgt.getAttribute("id") === "trsf") {
            setFlipClass("trnsf-reset");
        }
    };


    return (
        <div className="book-container">
            {bookData.map((book, index) => (
                <div
                    key={index}
                    className={`book ${flipClass}`}
                    style={{ zIndex: customZindex - index }}
                    onClick={handleClick}
                >
                    <div className="face-front">
                        <img src={book.img} />
                        <h2>{book.title}</h2>
                        <p>{book.text}</p>
                    </div>
                    <div className="face-back">
                        <img src={book.img} alt={`Back cover for ${book.title}`} />
                    </div>
                </div>
            ))}
        </div>
    );
}