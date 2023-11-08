import { useEffect, useState } from "react"
import { Product } from "../../types/Product"
import { ProductService } from "../../services/ProductService"
import Loader from "../Loader/Loader"
import { Table, Button } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";

const ProductTable = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    console.log(JSON.stringify(products, null, 2));

    const initializeNewProduct = (): Product => {
        return {
            id:0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image:""
        };
    };
    
    const [product, setProduct] = useState<Product>(initializeNewProduct);
    
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState("");
    
    const handleClick = (newTitle: string, prod: Product, modal:ModalType) =>{
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    }

    return(
        <div>
        <Button onClick={() => handleClick("Nuevo Product", initializeNewProduct(), ModalType.CREATE)}>Nuevo producto</Button>

        {isLoading ? <Loader/> : (
            <Table hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} alt={product.title} style={{width:'50px'}} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )}

        {showModal && (
            <ProductModal 
            show={showModal}
            onHide={() => setShowModal(false)}
            title={title}
            modalType={modalType}
            prod={product} />
        )}
        </div>
    )
}

export default ProductTable