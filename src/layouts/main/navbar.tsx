import React, { useContext } from 'react';
import "./index.css"

/** Components */
import Divider from '../../components/divider/divider';
import Input from '../../components/input/input';

/** Images */
import logo from "../../assets/images/ClothesStore.svg"
import search_icon from "../../assets/images/search_icon.svg"
import shopcar_icon from "../../assets/images/shopcar.svg"
import user_icon from "../../assets/images/user.svg"

/** Services */
import { ProductService } from "../../services/api/product"
import { Context } from '../../common/store';
import { setProducts, setIsSidebarOpen } from '../../common/actions'


const productService = new ProductService();


const Nabvar: React.FC = () => {

    const { store, dispatch } = useContext(Context);

    const searchProducts = async (value: any) => {

        try {

            if (value == "") return dispatch(setProducts([]));

            const result: any = await productService.get(`/search?category=MCO1430&q=${value}`);
            dispatch(setProducts(result.data.results));
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="main_nabvar">

            <div className="main_nabvar_top">

                <div className="logo_container">
                    <img onClick={() => dispatch(setIsSidebarOpen(true))} className="menu_icon not-md not-lg not-xl not-xxl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII=" />
                    <img src={logo} alt="clothesstore" className="logo" />
                </div>
                <div className="nabvar_actions">
                    <Input onChange={(event: any) => searchProducts(event.target.value)} icon={search_icon} />
                    <div className="icon_btn not-md not-xs">
                        <img className="btn_act" src={shopcar_icon} alt="" />
                        <img className="btn_act" src={user_icon} alt="" />
                    </div>
                </div>
            </div>

            <div className="main_nabvar_down not-md not-xs">
                <a>Hombre</a>
                <Divider />
                <a>Mujer</a>
                <Divider />
                <a>Niños</a>
                <Divider />
                <a>Accesorios</a>
                <Divider />
                <a>Ofertas</a>
            </div>

        </div>
    )
}

export default Nabvar;