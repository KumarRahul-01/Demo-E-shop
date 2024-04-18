import React, { useContext } from "react";
import { context } from "./Context/CreateContext";
import { Link } from "react-router-dom";


const CartList = () => {
  const { cartData,deleteItem,increment,decrement} = useContext(context);
  const removeItem = (id) => {
    deleteItem(id);
  };
  const totalPrice = cartData
    .map((items) => items.price * items.qty)
    .reduce((a, c) => a + c, 0);
  return (
    <>
      <section class="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div
                class="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-8">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                        </div>
                        <hr class="my-4" />
                        {cartData.map((items) => {
                          return (
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div key={items.id}>
                                      <img
                                        src={items.image}
                                        className="img-fluid rounded-3"
                                        alt="Shopping item"
                                        style={{ width: "65px" }}
                                      />
                                    </div>
                                    <div className="ms-3">
                                      <h5>{items.title}</h5>
                                      <p className="small mb-0">
                                        Rating: {items.rating.rate}*
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: "50px" }}>
                                      <h5 className="fw-normal mb-0">Qty</h5>
                                      <div className="d-flex"
                                    style={{
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}>
                                  <button
                                    style={{
                                      background: "transparent",
                                      border: "transparent",
                                    }}
                                    onClick={() => decrement(items.id)}
                                  >
                                    -
                                  </button>
                                  {items.qty}
                                  <button
                                    style={{
                                      background: "transparent",
                                      border: "transparent",
                                    }}
                                    onClick={() => increment(items.id)}
                                  >
                                    +
                                  </button>
                                  </div>
                                    </div>
                                    <div style={{ width: "80px" }}>
                                      <h5 className="mb-0">{items.price}</h5>
                                    </div>
                                    <div>
                                  <button
                                    style={{
                                      background: "transparent",
                                      border: "transparent",
                                      fontSize: "25px",
                                    }}
                                    onClick={() => removeItem(items.id)}
                                  >
                                    X
                                  </button>
                                </div>
                                    <a href="#!" style={{ color: "#cecece" }}>
                                      <i className="fas fa-trash-alt"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        <div class="pt-5">
                          <h6 class="mb-0">
                            <Link to="/shop" class="text-body">
                              <i class="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-4">
                          <h5 class="text-uppercase">Price </h5>
                          <h5>€ {totalPrice}</h5>
                        </div>

                        <h5 class="text-uppercase mb-3">Shipping</h5>

                        <div class="mb-4 pb-2">
                          <select class="select">
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        {/* <h5 class="text-uppercase mb-3">Give code</h5> */}

                        {/* <div class="mb-5">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="form3Examplea2">
                              Enter your code
                            </label>
                          </div>
                        </div> */}

                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-5">
                          <h5 class="text-uppercase">Total price</h5>
                          <h5>€ {totalPrice+5}</h5>
                        </div>

                        <button
                          type="button"
                          class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Place order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartList;
