import React, { useContext, useEffect, useState } from "react";
import styles from "./Landing.module.scss";
import NetworkController from "./NetworkController";
import { AppContext } from "./GlobalContext";
import ProductCard from "./ProductCard";

function Landing() {
    const { products: a } = useContext(AppContext);
    const [products, setProducts] = a;

    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        title: "",
        priceFrom: null,
        priceTo: null,
        widthFrom: null,
        widthTo: null,
        heightFrom: null,
        heightTo: null,
    });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchData = async () => {
            const res = await NetworkController.getProducts({ ...filters, sortOrder, page: currentPage, pageSize });
            setProducts(res.content);
            setTotalPages(res.totalPages);
            setTotalProducts(res.totalElements);
        };
        
        fetchData();
    }, [filters, currentPage, pageSize, sortOrder]);
    
    

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setFilters({ ...filters, title: e.target.value });
    }

    const handleFilterChange = (filterType, value) => {
        setFilters({ ...filters, [filterType]: value });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Proizvodi</h1>
            <input 
                className={styles.searchBar}
                placeholder="Search for products..."
                value={search}
                onChange={handleSearchChange} 
            />
            <div className={styles.content}>
                <div className={styles.filterSidebar}>
                    <div className={styles.filterGroup}>
                        <label>Prikaži: </label>
                        <select value={pageSize} onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setCurrentPage(0);
                        }}>
                            <option value="3">3 po strani</option>
                            <option value="5">5 po strani</option>
                            <option value="10">10 po strani</option>
                        </select>
                    </div>
                    <div className={styles.filterGroup}>
                        <label>Sortiraj po ceni:</label>
                        <label for="sortOrderAsc">Rastuće</label>
                        <input type="radio" id="sortOrderAsc" value="asc" checked={sortOrder === 'asc'} onChange={() => setSortOrder('asc')} /> 
                        <label for="sortOrderDesc">Opadajuće</label>
                        <input type="radio" id="sortOrderDesc" value="desc" checked={sortOrder === 'desc'} onChange={() => setSortOrder('desc')} /> 
                    </div>
                    <div className={styles.filterGroup}>
                        <h2 className={styles.filterTitle}>Cena</h2>
                        <input type="number" placeholder="Od" onChange={(e) => handleFilterChange("priceFrom", e.target.value)} />
                        <input type="number" placeholder="Do" onChange={(e) => handleFilterChange("priceTo", e.target.value)} />
                    </div>
                    <div className={styles.filterGroup}>
                        <h2 className={styles.filterTitle}>Širina</h2>
                        <input type="number" placeholder="Od" onChange={(e) => handleFilterChange("widthFrom", e.target.value)} />
                        <input type="number" placeholder="Do" onChange={(e) => handleFilterChange("widthTo", e.target.value)} />
                    </div>
                    <div className={styles.filterGroup}>
                        <h2 className={styles.filterTitle}>Visina</h2>
                        <input type="number" placeholder="Od" onChange={(e) => handleFilterChange("heightFrom", e.target.value)} />
                        <input type="number" placeholder="Do" onChange={(e) => handleFilterChange("heightTo", e.target.value)} />
                    </div>
                </div>
                <div className={styles.avatar}>
                {Array.isArray(products) && products.map(product => <ProductCard isInCart={false} key={product.id} product={product} />)}
                </div>
            </div>
            <div className={styles.pagination}>
                <div>
                    {currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button key={index} className={index === currentPage ? styles.activePage : ''} onClick={() => setCurrentPage(index)}>{index + 1}</button>
                    ))}
                    {currentPage < totalPages - 1 && <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
                </div>
                <div>
                    Total: {totalProducts}
                </div>
            </div>
        </div>
    );
}

export default Landing;
