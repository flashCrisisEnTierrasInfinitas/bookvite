const data = [
    {
        id: 1,
        img: 'https://cdn.culturagenial.com/es/imagenes/la-sombra-del-viento-portada-cke.jpg'
    },
    {
        id: 2,
        img: 'https://cdn.culturagenial.com/es/imagenes/el-asesinato-de-platon-cke.jpg'
    },
    {
        id: 3,
        img: 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/18/02/1280x1972/cumbres-borrascosas-emily-bronte.jpg?resize=980:*'
    },
    {
        id: 4,
        img: 'https://www.okchicas.com/wp-content/uploads/2018/10/Libros-con-menos-de-200-paginas-12.jpg'
    },
    {
        id: 5,
        img: 'https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg'
    }
]

export default function Conted() {
    return (
        <div className="conter-books">

            {data.map(data => (
                <a href={`/listBooks/7`} key={data.id}>
                    <div className="target">
                        <div className="img-target">
                            <img src={data.img} />
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
