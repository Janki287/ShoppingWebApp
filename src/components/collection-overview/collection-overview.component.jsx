import React from "react";
import "./collection-overview.styles.scss";
import CollectionPreview from '../collection-preview/collection-preview.component';

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectShopCollectionsForCollectionOverview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections}) => (
  //collections from mapStateToProps(left side)

  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForCollectionOverview
});

export default connect(mapStateToProps)(CollectionOverview);
