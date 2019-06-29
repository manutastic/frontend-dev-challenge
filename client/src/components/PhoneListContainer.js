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
        this.toggleDetails = this.toggleDetails.bind(this);
        this.nextPage = this.nextPage.bind(this);

        window.onscroll = debounce(() => {
            console.log("s");
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
                console.log("scroll");
                this.nextPage();
            }
        }, 100);
    }

    getParams(location) {
        const params = new URLSearchParams(location.search);
        return {
            page: params.get('page') || '',
        }
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        if (params.page) {
            this.props.updatePage(params.page);
        } else {
            this.props.getProducts(this.props.page);
        }
    }
    
    toggleDetails(index) {
        this.selectedItem = index;
        this.props.toggleDetails();
    }

    nextPage() {
        let newPageCount = Number(this.props.page) + 1;
        this.props.updatePage(newPageCount);
        let params = queryString.parse(this.props.location.search);
        params.page = newPageCount;
        console.log(params.page);
        this.props.history.push({search: queryString.stringify(params)});
        this.props.getProducts(this.props.page);
        // this.props.location.search = queryString.stringify(params);
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
                <button onClick={this.nextPage}>Load More</button>
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