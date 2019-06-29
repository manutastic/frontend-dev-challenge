import React, {Component} from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import debounce from 'debounce';

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
            console.log("s");
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
                console.log("scroll");
                this.nextPage();
            }
        }, 100);
    }

    updateProducts() {
        this.props.getProducts(this.props.page, this.numPerPage);
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        if (params.page) {
            this.props.updatePage(params.page);
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
        this.props.updatePage(newPageCount);
        // Update params
        let params = queryString.parse(this.props.location.search);
        params.page = newPageCount;
        this.props.history.push({search: queryString.stringify(params)});
        
        this.updateProducts();
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
                <button onClick={this.nextPage}>Scroll or Click to Load More</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        showDetails: state.showDetails,
        page: state.page
    }
}

export default connect(mapStateToProps, {getProducts, toggleDetails, updatePage})(PhoneListContainer);