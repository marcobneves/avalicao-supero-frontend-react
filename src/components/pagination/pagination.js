import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Validations  props*/
const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

/** Config of page */
const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items) {
            this.setPage(this.props.pageCurrent);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    /** Control pages */
    setPage(page) {
        var { items, pageSize } = this.props;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items, page, pageSize);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(page);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                    <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <a onClick={() => this.setPage(1)} className="page-link">Primeiro</a>
                    </li>
                    <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <a onClick={() => this.setPage(pager.currentPage - 1)} className="page-link">Anterior</a>
                    </li>
                    {pager.pages.map((page, index) =>
                        <li key={index} className={`page-item ${pager.currentPage === page ? 'active' : ''}`}>
                            <a onClick={() => this.setPage(page)} className="page-link">{page}</a>
                        </li>
                    )}
                    <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                        <a onClick={() => this.setPage(pager.currentPage + 1)} className="page-link">Próximo</a>
                    </li>
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <a onClick={() => this.setPage(pager.totalPages)} className="page-link">ultimo</a>
                    </li>
                </ul>
            </nav >
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;