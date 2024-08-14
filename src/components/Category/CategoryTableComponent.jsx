import React from 'react';
import DataTable from 'react-data-table-component';
import { Button, Input } from 'antd';

const CategoryTableComponent = ({ categories, onEdit, onDelete, searchTerm, onSearch }) => {
    const filteredCategories = categories.filter(category =>
        category.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        {
            name: 'Actions',
            cell: row => (
                <div>
                    <Button onClick={() => onEdit(row)} type="primary" size="small" className="me-2">Edit</Button>
                    <Button onClick={() => onDelete(row.id)} className='ant-btn css-var-r6 ant-btn-primary ant-btn-dangerous' size="small">Delete</Button>
                </div>
            )
        }
    ];

    return (
        <div className="col-md-8">
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => onSearch(e.target.value)}
                />
            </div>
            <DataTable
                columns={columns}
                data={filteredCategories}
                pagination
                highlightOnHover
                striped
                responsive
            />
        </div>
    );
};

export default CategoryTableComponent;
