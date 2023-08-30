import { Form } from "react-bootstrap";

const Discount = () => {


    return (
        <div className="category-wrap">
            <h4>Discount</h4>

            <Form>
                <div className="d-flex flex-column gap-2 filter-check" id="discount-filter">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="50" id="productdiscountRadio6" />
                        <label className="form-check-label text-lowercase" htmlFor="productdiscountRadio6">50% or more</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="40" id="productdiscountRadio5" />
                        <label className="form-check-label text-lowercase" htmlFor="productdiscountRadio5">40% or more</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="30" id="productdiscountRadio4" />
                        <label className="form-check-label text-lowercase" htmlFor="productdiscountRadio4">
                            30% or more
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="20" id="productdiscountRadio3" />
                        <label className="form-check-label text-lowercase" htmlFor="productdiscountRadio3">
                            20% or more
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="10" id="productdiscountRadio2" />
                        <label className="form-check-label text-lowercase" htmlFor="productdiscountRadio2">
                            10% or more
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="0" id="productdiscountRadio1" />
                        <label className="form-check-label text-lowercase" htmlFor="productdiscountRadio1">
                            Less than 10%
                        </label>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Discount;