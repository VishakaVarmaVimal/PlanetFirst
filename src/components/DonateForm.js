import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {toast} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

class DonateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign : {
                name: props.title,
                donation: 0,
                description: "Donate to Planet"
            }
        };
        this.handleToken = this.handleToken.bind(this);
    }

    async handleToken(token, addresses) {
        const campaign = this.state.campaign;
        const response = await axios.post(
            "https://neu-donate-app.herokuapp.com/checkout",
            {
                token,
                campaign
            }
        );
        const {status} = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", {type: "success"});
        } else {
            toast("Something went wrong", {type: "error"});
        }
    }

    handleChange = (e) => {
        var campaign = {...this.state.campaign}
        campaign.donation = e.target.value;
        this.setState({campaign});
    };

    render() {
        return (
            <div className="donateform_wrapper container">
                <form className="donation_form">
                    <h6>your Donation</h6>
                    <h1>$ {this.state.campaign.donation}</h1>
                    <hr></hr>
                    <h6>Select Donation Amount</h6>

                    <button type="button" onClick={this.handleChange} className="amtbutton" value="30">
                        $30
                    </button>
                    <button type="button" onClick={this.handleChange} className="amtbutton" value="60">
                        $60
                    </button>
                    <button type="button" onClick={this.handleChange} className="amtbutton" value="100">
                        $100
                    </button>
                    <button type="button" onClick={this.handleChange} className="amtbutton" value="150">
                        $150
                    </button>
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.campaign.donation}
                    />
                    <br></br>
                    <br></br>

                </form>
                <StripeCheckout
                    stripeKey="pk_test_Klc4GNxArVilIqAWDYTCxshc00rzc3AkaX"
                    token={this.handleToken}
                    amount={this.state.campaign.donation * 100}
                    name={this.state.campaign.name}
                    billingAddress
                >
                    <button className="btn btn-primary">
                        Donate
                    </button>
                </StripeCheckout>
            </div>
        );
    }
}

export default DonateForm;