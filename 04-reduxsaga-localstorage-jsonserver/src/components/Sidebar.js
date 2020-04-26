/* eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./react-vertical-timeline/VerticalTimeline.css";
import "./react-vertical-timeline/VerticalTimelineElement.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "./react-vertical-timeline";
import DeleteForever from "@material-ui/icons/DeleteForever";
import Backup from "@material-ui/icons/Backup";
import { recover, deleteForever } from "../redux/actions/sidebar";

function Sidebar({ themeColor, deletedItems, recover, deleteForever }) {
  // const contentStyle = { background: themeColor, color: "#000" };
  // const contentArrowStyle = { borderRight: "7px solid  " + themeColor };
  // const iconStyle = { background: themeColor, color: "#000" };

  function handleClick(event) {
    // delete forever
    if (event.target.viewportElement === undefined) {
      //console.log("1111");
      console.log(event.target.childNodes[0].getAttribute("indexd"));
      deleteForever(event.target.childNodes[0].getAttribute("indexd"));
    } else if (event.target.viewportElement === null) {
      //console.log("2222");
      console.log(event.target.getAttribute("indexd"));
      deleteForever(event.target.getAttribute("indexd"));
    } else {
      //console.log("3333");
      console.log(event.target.viewportElement.getAttribute("indexd"));
      deleteForever(event.target.viewportElement.getAttribute("indexd"));
    }
  }

  return (
    <div>
      {deletedItems.map((ele, index) => {
        return (
          <VerticalTimeline
            layout="1-column"
            key={ele.toString() + Math.random()}
          >
            <VerticalTimelineElement
              date={ele[1]}
              icon={<DeleteForever indexd={index} />}
              iconOnClick={handleClick}
            >
              <p>
                {ele[0]}{" "}
                <span style={{ float: "right" }}>
                  <Backup />
                </span>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    themeColor: state.themeColor,
    deletedItems: state.deletedItems,
  };
}

const mapDispatchToProps = {
  recover,
  deleteForever,
};

Sidebar.propTypes = {
  themeColor: PropTypes.string.isRequired,
  deletedItems: PropTypes.array.isRequired,
  recover: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
