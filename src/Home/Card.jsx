function Card() {
    return (
        <div>
            <section className="cardHome">
                <div className="container my-5">
                    <div className="row">
                        {/* card 1 */}
                        <div className="col-md-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-overlay"
                                    data-mdb-ripple-init
                                    data-mdb-ripple-color="light">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                        className="img-fluid"
                                        alt="image1"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251,251,251,0.15);",
                                            }}></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a
                                        href="#!"
                                        className="btn btn-primary"
                                        data-mdb-ripple-init>
                                        Button
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="col-md-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-overlay"
                                    data-mdb-ripple-init
                                    data-mdb-ripple-color="light">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                        className="img-fluid"
                                        alt="image2"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251,251,251,0.15);",
                                            }}></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a
                                        href="#!"
                                        className="btn btn-primary"
                                        data-mdb-ripple-init>
                                        Button
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="col-md-4">
                            <div className="card">
                                <div
                                    className="bg-image hover-overlay"
                                    data-mdb-ripple-init
                                    data-mdb-ripple-color="light">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                                        className="img-fluid"
                                        alt="image3"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{
                                                backgroundColor:
                                                    "rgba(251,251,251,0.15);",
                                            }}></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <a
                                        href="#!"
                                        className="btn btn-primary"
                                        data-mdb-ripple-init>
                                        Button
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Card;
