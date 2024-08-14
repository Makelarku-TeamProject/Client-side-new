import React, { useContext, useState, useEffect } from 'react';
import { Modal, Carousel, Pagination } from 'antd'; 
import { DataContext } from '../../../context/DataContext';

const SectionCard = () => {
  const { houses, houseLoading, houseError, fetchHouses, categories } = useContext(DataContext);
  const [selectedHouse, setSelectedHouse] = useState(null); 
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [pageSize] = useState(6); 
  console.log('a')
  
  useEffect(() => {
    fetchHouses(); 
  }, [fetchHouses]);

  const showModal = (house) => {
    setSelectedHouse(house);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedHouse(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedHouse(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (houseLoading) return <p>Loading...</p>;
  if (houseError) return <p>Error: {houseError}</p>;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedHouses = houses.slice(startIndex, endIndex);
  const totalPages = Math.ceil(houses.length / pageSize);

  return (
    <>
      <section id="cards" className="card-section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="title">
                <h4>
                  <i className="fa fa-folder" aria-hidden="true"></i> Kategori Properti
                </h4>
              </div>
              <div className="list-group">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href="#"
                    className="list-group-item list-group-item-action border-0 shadow-sm mb-2 rounded"
                  >
                    <i className="fa fa-folder-open" aria-hidden="true"></i> {category.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-md-8">
              <div className="row">
                {paginatedHouses.map((house) => {
                  const category = categories.find(cat => cat.id === house.categoryId);
                  const primaryImage = house.images[0]; 

                  return (
                    <div className="col-md-4 mb-4" key={house.id}>
                      <div className="card property-card">
                        {primaryImage && (
                          <div className="card-img-top">
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                showModal(house); 
                              }}
                            >
                              <img
                                src={primaryImage}
                                alt={house.name}
                                className="img-thumbnail"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                              />
                            </a>
                          </div>
                        )}
                        <div className="card-body text-center">
                          <h5 className="property-card-title">{house.name}</h5>
                          <div className="property-details text-left">
                            <p>
                              <i className="fa fa-bed"></i> {house.num_rooms} Kamar Tidur
                            </p>
                            <p>
                              <i className="fa fa-bath"></i> {house.bathrooms} Kamar Mandi
                            </p>
                            <p>
                              <i className="fa fa-expand"></i> {house.sq_ft} m²
                            </p>
                            <p>
                              <i className="fa fa-dollar-sign"></i> Rp. {house.price.toLocaleString()}
                            </p>
                            {category && (
                              <p>
                                <i className="fa fa-folder-open"></i> {category.name}
                              </p>
                            )}
                          </div>
                          <a
                            href="#"
                            className="btn btn-primary"
                            onClick={(e) => {
                              e.preventDefault();
                              showModal(house); 
                            }}
                          >
                            Lihat Detail
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pagination-container text-center mt-4">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={houses.length}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        title="House Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Close"
        width={800} 
      >
        {selectedHouse && (
          <div>
            <h3>{selectedHouse.name}</h3>
            {selectedHouse.images.length > 0 && (
              <Carousel>
                {selectedHouse.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={image}
                      alt={`Image ${imgIndex + 1}`}
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </Carousel>
            )}
            <table className="table table-striped mt-4">
              <tbody>
              <tr>
                  <td><strong>Location:</strong></td>
                  <td>{selectedHouse.location}</td>
                </tr>
                <tr>
                  <td><strong>Number of Rooms:</strong></td>
                  <td>{selectedHouse.num_rooms}</td>
                </tr>
                <tr>
                  <td><strong>Size:</strong></td>
                  <td>{selectedHouse.sq_ft} m²</td>
                </tr>
                <tr>
                  <td><strong>Price:</strong></td>
                  <td>Rp. {selectedHouse.price.toLocaleString()}</td>
                </tr>
                <tr>
                  <td><strong>Description:</strong></td>
                  <td>{selectedHouse.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </Modal>
    </>
  );
};

export default SectionCard;
