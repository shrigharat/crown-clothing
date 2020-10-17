import React, {Component} from "react";
import {connect} from "react-redux";

import './directory.style.scss'
import MenuItem from "../menu-item/menu-item.component";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => (
            <div className="directory-menu">
                {
                    sections.map(
                        ({id, ...otherSectionProps}) => (
                            <MenuItem key={id} {...otherSectionProps}/>
                        )
                    )
                }
            </div>
        );


const mapStateToProps = sate => createStructuredSelector(
    {
        sections: selectDirectorySections
    }
);

export default connect(mapStateToProps)(Directory);