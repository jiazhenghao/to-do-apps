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

function Sidebar({ deletedItems, recover, deleteForever }) {
  function handleDeleteForever(event) {
    // delete forever
    if (event.target.viewportElement === undefined) {
      deleteForever(event.target.childNodes[0].getAttribute("indexd"));
    } else if (event.target.viewportElement === null) {
      deleteForever(event.target.getAttribute("indexd"));
    } else {
      deleteForever(event.target.viewportElement.getAttribute("indexd"));
    }
  }

  function handleRecover(event) {
    // put this record to state.lists
    try {
      if (event.target.localName === "path") {
        recover(event.target.parentElement.getAttribute("indexd"));
      } else if (event.target.localName === "svg") {
        recover(event.target.getAttribute("indexd"));
      }
    } catch (error) {
      console.log(error);
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
              iconOnClick={handleDeleteForever}
            >
              <p>
                {ele[0]}{" "}
                <span style={{ float: "right" }}>
                  <Backup onClick={handleRecover} indexd={index} />
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
    deletedItems: state.deletedItems,
  };
}

const mapDispatchToProps = {
  recover,
  deleteForever,
};

Sidebar.propTypes = {
  deletedItems: PropTypes.array.isRequired,
  recover: PropTypes.func.isRequired,
  deleteForever: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
