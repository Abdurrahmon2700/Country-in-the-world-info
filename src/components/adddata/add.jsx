import React, { useState, useEffect } from "react";
import "./Add.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Api from "../../Api/Api";
import axios from "axios";

function Add(props) {
  const [modal1, setModal1] = useState(false);

  const [data, setData] = useState([]);

  const [currentPage, setCurrnetPage] = useState(1);
  const [prevPage, setPrevPage] = useState(10);
  const [loading, setLoading] = useState(false);

  // console.log(data);

  useEffect(() => {
    Api.getUser().then((item) => setData(item.data));
  }, []);

  const firstPage = currentPage * prevPage;
  const numPage = firstPage - prevPage;

  const currentData = data.slice(numPage, firstPage);
  console.log(currentData);

  return (
    <>
      {currentData.map((item) => (
        <>
          <MDBCard
            style={{
              display: "flex",
              width: "33%",
              margin: "auto",
              marginBottom: "20px",
              padding: "10px",
            }}
          >
            <MDBCardImage src={item.flags.svg} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardText>
                <b>Capitel:</b> {item.capital}
              </MDBCardText>
              <MDBCardText>
                <b>Population: </b>
                {item.population} pupils
              </MDBCardText>
              <MDBCardText>
                <b>Country border:</b> {item.borders}
              </MDBCardText>

              <button
                className="btn btn-primary"
                onClick={() => setModal1(true)}
              >
                More info
              </button>
            </MDBCardBody>
          </MDBCard>
          {modal1 && (
            <div className="card modal_country">
              <div className="wrapper_info p-4">
                <div className="w-100 d-flex justify-content-end">
                  <button
                    className="btn btn-danger"
                    onClick={() => setModal1(false)}
                  >
                    x
                  </button>
                </div>
              </div>
              console.log({item.name});
            </div>
          )}
        </>
      ))}
      ;
      <div className="w-100 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Add;
