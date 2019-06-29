import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.limit = 6; 
        this.currentPage = 1;
        this.numPages = Math.ceil(this.props.numRecords / this.limit)
    }
}