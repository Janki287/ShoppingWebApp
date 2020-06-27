import React from 'react';
import './collection-page.styles.scss';

import {connect} from 'react-redux';

import {selectCollectionFromUrl} from '../../redux/shop/shop.selectors';

const CollectionPage = ( { collection } ) => (
    //collection from mapStateToProps(left side)

    <div className='collection-page'>
        COLLECTION PAGE
        {
            console.log(collection)
        }
    </div>
);

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollectionFromUrl(ownProps.match.params.collectionId)(state)
});
//ownProps has a property that are not from redux-store but from the other components
//example: in shop-page component from <Route />, we get the match props into this CollectionPage component
//match is not from the redux-store, but it is from Route (ShopPage)
//so we can use this match props by using ownProps of the mapStateToProps();

export default connect(mapStateToProps)(CollectionPage);