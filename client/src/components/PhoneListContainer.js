import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getProducts, toggleDetails } from '../actions/actionCreators';
import Phone from './Phone';
import PhoneDetailComponent from './PhoneDetailComponent';

class PhoneListContainer extends Component {
    constructor(props) {
        super(props);
        this.selectedItem = 0;
        this.toggleDetails = this.toggleDetails.bind(this);
    }
    componentDidMount() {
        this.props.getProducts();
    }

    toggleDetails(index) {
        this.selectedItem = index;
        this.props.toggleDetails();
    }
    render() {
        let phones = this.props.products.map(phone => (
            <Phone
                phone={phone}
                key={phone.id}
                id={phone.id}
                onClick={this.toggleDetails.bind(this)}
            />
        ));
        return(
            <div className="phone-list-container">
                {this.props.showDetails ? 
                    <PhoneDetailComponent
                        phone={this.props.products[this.selectedItem]}
                        closeDetails={this.toggleDetails.bind(this)}
                    />
                    : null
                }
                {phones}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        showDetails: state.showDetails
    }
}

export default connect(mapStateToProps, {getProducts, toggleDetails})(PhoneListContainer);