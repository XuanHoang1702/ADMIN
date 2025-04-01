import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/function/Product';
import { Product, ProductResponse } from '../../services/interface/Product';

const ProductAdmin: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [totalRecords, setTotalRecords] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const pageNumber = Math.floor(first / rows) + 1;
            const response: ProductResponse = await getProducts(pageNumber, rows);
            setProducts(response.data);
            setTotalRecords(response.totalRecords);
        } catch (error) {
            console.error('Failed to load products:', error);
            setProducts([]);
            setTotalRecords(0);
        } finally {
            setLoading(false);
        }
        };

        fetchProducts();
    }, [first, rows]);

    const imageBodyTemplate = (rowData: Product) => {
        return (
        <img
            src = {`https://i.imgur.com/${rowData.imagE_NAME}.jpg`}
            alt={rowData.producT_NAME}
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
        );
    };

    const priceBodyTemplate = (rowData: Product) => {
        return rowData.producT_PRICE.toLocaleString('en-EN', { style: 'currency', currency: 'USD' });
    };

    const statusBodyTemplate = (rowData: Product) => {
        return (
        <span
            style={{
            color: rowData.producT_STATUS === 'ACTIVE' ? 'green' : 'red',
            fontWeight: 'bold',
            }}
        >
            {rowData.producT_STATUS}
        </span>
        );
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ padding: '20px' }}>
        <h2>Quản lý sản phẩm</h2>
        <DataTable
            value={products}
            paginator
            rows={rows}
            first={first}
            totalRecords={totalRecords}
            onPage={(e) => {
            setFirst(e.first);
            setRows(e.rows);
            }}
            rowsPerPageOptions={[5, 10, 25]}
            tableStyle={{ minWidth: '50rem' }}
            sortMode="multiple"
            removableSort
            filters={{ producT_NAME: { value: '', matchMode: 'contains' } }}
        >
            <Column
            field="producT_NAME"
            header="Tên sản phẩm"
            sortable
            filter
            filterPlaceholder="Tìm theo tên"
            />
            <Column header="Hình ảnh" body={imageBodyTemplate} style={{ width: '100px' }} />
            <Column field="producT_PRICE" header="Giá" sortable body={priceBodyTemplate} />
            <Column field="producT_STATUS" header="Trạng thái" sortable body={statusBodyTemplate} />
        </DataTable>
        </div>
    );
};

export default ProductAdmin;