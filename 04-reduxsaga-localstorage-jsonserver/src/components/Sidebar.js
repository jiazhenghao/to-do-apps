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

function Sidebar({ themeColor }) {
  // const color = window.localStorage.getItem("theme-todoapp");
  const contentStyle = { background: themeColor, color: "#000" };
  const contentArrowStyle = { borderRight: "7px solid  " + themeColor };
  const iconStyle = { background: themeColor, color: "#000" };

  function handleClick() {
    console.log(123);
  }
  return (
    <div style={{}}>
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2011 - present"
          iconStyle={iconStyle}
          icon={<DeleteForever />}
          iconOnClick={handleClick}
        >
          <p>辅导小朋友功课</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2011 - present"
          iconStyle={iconStyle}
          icon={<DeleteForever />}
          iconOnClick={handleClick}
        >
          <p>揍儿子</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2011 - present"
          iconStyle={iconStyle}
          icon={<DeleteForever />}
          iconOnClick={handleClick}
        >
          <p>
            很长一段话，来测试文字长了会怎么样---公开资料显示，章泽天近期向北京互联网法院提起诉讼，以网络侵权责任纠纷为案由起诉网络问答社区知乎，该案已被法院受理开庭。--4月23日，周扬青在微博发布长文宣布已与罗志祥分手一段时间，并爆料罗志祥在与自己在一起的期间多次劈腿。随后，罗志祥在微博发文回应，称两人在一起九年分分合合很多次，自己做得不对的地方会检讨，但很多事情不是只言片语就能说清楚的。他对周扬青表示感谢，“我不后悔”。
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="2011 - present"
          iconStyle={iconStyle}
          icon={<DeleteForever />}
          iconOnClick={handleClick}
        >
          <p>Creative Direction, User Experience, Visual Design, Project</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    themeColor: state.themeColor,
  };
}

Sidebar.propTypes = {
  themeColor: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Sidebar);
