import React from "react";
import {connect} from "react-redux";

import './collection-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(
                ({id, ...otherCollectionProps}) => (
                    <CollectionPreview
                        key={id}
                        items={collections}
                        {...otherCollectionProps}
                    />
                )
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionsForPreview
    }
);

export default connect(mapStateToProps)(CollectionsOverview);