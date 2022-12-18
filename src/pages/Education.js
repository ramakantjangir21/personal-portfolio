import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

const Education = () => {
  return (
    <div className="education">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ram Krishna Param Hans Sr Sec School, Srimadhopur, Sikar, Raj.
          </h3>
          <p>Secondary (10th)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Government Sr Sec School, Srimadhopur, Sikar, Raj.
          </h3>
          <p>Senior Secondary (12th)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Government Engineering College, Bharatpur, Raj.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Science Engineering
          </h4>
          <p>Bachelor Of Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Education;
