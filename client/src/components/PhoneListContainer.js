import React, {Component} from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import debounce from 'debounce';

import '../css/spinner.scss'

import { getProducts, toggleDetails, updatePage } from '../actions/actionCreators';
import Phone from './Phone';
import PhoneDetailComponent from './PhoneDetailComponent';

class PhoneListContainer extends Component {
    constructor(props) {
        super(props);
        this.selectedItem = 0;
        this.numPerPage = 6;

        this.toggleDetails = this.toggleDetails.bind(this);
        this.updateProducts = this.updateProducts.bind(this);
        this.nextPage = this.nextPage.bind(this);

        window.onscroll = debounce(() => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
                this.nextPage();
            }
        }, 100);
    }

    updateProducts() {
        console.log(this.props.isLoading);
        this.props.getProducts(this.props.page, this.numPerPage);
        console.log(this.props.isLoading);
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        if (params.page) {
            this.props.updatePage(Number(params.page), this.numPerPage);
        } else {
            this.updateProducts();
        }
    }
    
    toggleDetails(index) {
        this.selectedItem = index;
        this.props.toggleDetails();
    }

    nextPage() {
        // Update page state
        let newPageCount = Number(this.props.page) + 1;
        this.props.updatePage(newPageCount, this.numPerPage);
        // Update params
        let params = queryString.parse(this.props.location.search);
        params.page = newPageCount;
        this.props.history.push({search: queryString.stringify(params)});
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
                {this.props.isLoading ?
                    <div className="lds-dual-ring"></div>
                    : null
                }
                <button className="load-more" onClick={this.nextPage}>Scroll or Click to Load More</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        showDetails: state.showDetails,
        page: state.page,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {getProducts, toggleDetails, updatePage})(PhoneListContainer);