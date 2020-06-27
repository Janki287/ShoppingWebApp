import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { connect } from "react-redux";

const Directory = ( { sections } ) => {
  //sections is from mapStateToProps(left side)

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
//{ id,imageUrl,size,title,linkUrl } this is same as {id,...otherSectionProps}
//title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} this is same as {...otherSectionProps}
