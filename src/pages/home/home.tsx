import React, { useContext } from 'react';

import "./home.css"

/** Components */
import ProductCard from '../../components/product_card/product_card';
import SectionCard from '../../components/section_card/section_card';
import MultipleCarrousel from '../../components/multiple_carrousel/multiple_carrousel';

/** Images */
import banner from "../../assets/images/banner-principal.png"
import infantilSectionImg from "../../assets/images/categorias-destacadas-moda-infantil.png"
import proteccionSectionImg from "../../assets/images/categorias-destacadas-proteccion.png"

/** Services */
import { Context } from '../../common/store';

const Home: React.FC = () => {

    const { store } = useContext(Context);

    const  moreSearcher = [
        {
            id: "MCO461126930",
            title: "Boina Inglesa Con Correa Unisex Sol Moda Gorro Sombrero Tela",
            price: 25900,
            thumbnail: "http://http2.mlstatic.com/D_756065-MCO45186946854_032021-O.jpg"
        },
        {
            id: "MCO448370360",
            title: "Gorra Personalizada Publicitarias De Malla Camionera Trucker",
            price: 7499,
            thumbnail: "http://http2.mlstatic.com/D_615698-MCO42309248452_062020-O.jpg"
        },
        {
            id: "MCO502291010",
            title: "Gorra Golf Beisbol Cachucha Hombre Mujer Deportiva New Cap",
            price: 24900,
            thumbnail: "http://http2.mlstatic.com/D_894470-MCO43122400619_082020-O.jpg"
        },
        {
            id: "MCO570603295",
            title: "Sombrero Pesquero Safari Capa Cuello Playa Sol Hombre Mujer",
            price: 16900,
            thumbnail: "http://http2.mlstatic.com/D_940526-MCO42649442347_072020-O.jpg"
        }
    ]

    return (
        <div>
            {store.products.length == 0 &&
                <div>
                    <div>
                        <img width="100%" src={banner} alt="main_banner"></img>
                    </div>
                    <div className="main_sections">
                        <div className="section_item">
                            <div>
                                <SectionCard title="MODA INFANTIL" image={infantilSectionImg} />
                            </div>
                            <div>
                                <SectionCard title="PROTECCIÓN" image={proteccionSectionImg} />
                            </div>
                        </div>
                        <h2 style={{textAlign: "center"}}>PRODUCTO MÁS BUSCADOS</h2>
                        <br/>
                        <MultipleCarrousel items={moreSearcher}/>
                    </div>
                </div>
            }
            {store.products.length > 0 &&
                <div className="item_products_found">
                    {
                        store.products.map((item: any, key: number) => (
                            <ProductCard id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} key={`products-${key}`} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Home;