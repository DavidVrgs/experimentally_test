import React from 'react';
import "./product_card.css"

/** Components */

interface IProductCard {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
}



const ProductCard: React.FC<IProductCard> = ({ id, title, price, thumbnail }) => {

    return (
        <div className="product_card">
            <div className="product_card_image">
                <img src={thumbnail} width="100%" height="100%"></img>
            </div>
            <div className="product_card_info">
                <span>{title.slice(0, 35)}</span>
                <div className="product_price_section">
                    <span className="product_new_price">${price}</span>
                    <span className="product_old_price">$100.452</span>
                </div>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCard;