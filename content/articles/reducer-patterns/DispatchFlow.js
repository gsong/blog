/** @jsx jsx */
import { jsx } from "theme-ui";

export const svgStyle = {
  display: "block",
  margin: "auto",
  marginBottom: "1.45rem",

  tspan: { fill: "black", stroke: "none" },
};

function SvgDispatchFlow(props) {
  return (
    <svg
      id="mermaid-1595125236019"
      width="100%"
      height="100%"
      viewBox="-50 -10 685 418"
      aria-labelledby="dispatch-flow"
      sx={{ ...svgStyle, maxWidth: 685 }}
      {...props}
    >
      <title id="dispatch-flow">
        Sequence diagram of React.useReducer dispatch flow
      </title>
      <style>
        {
          "#mermaid-1595125236019 .label{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);color:#333}#mermaid-1595125236019 .label text{fill:#333}#mermaid-1595125236019 .node rect,#mermaid-1595125236019 .node circle,#mermaid-1595125236019 .node ellipse,#mermaid-1595125236019 .node polygon,#mermaid-1595125236019 .node path{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1595125236019 .node .label{text-align:center}#mermaid-1595125236019 .node.clickable{cursor:pointer}#mermaid-1595125236019 .arrowheadPath{fill:#333}#mermaid-1595125236019 .edgePath .path{stroke:#333;stroke-width:1.5px}#mermaid-1595125236019 .flowchart-link{stroke:#333;fill:none}#mermaid-1595125236019 .edgeLabel{background-color:#e8e8e8;text-align:center}#mermaid-1595125236019 .edgeLabel rect{opacity:0.5}#mermaid-1595125236019 .cluster rect{fill:#ffffde;stroke:#aa3;stroke-width:1px}#mermaid-1595125236019 .cluster text{fill:#333}#mermaid-1595125236019 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:12px;background:#ffffde;border:1px solid #aa3;border-radius:2px;pointer-events:none;z-index:100}#mermaid-1595125236019 .actor{stroke:#ccf;fill:#ECECFF}#mermaid-1595125236019 text.actor&gt;tspan{fill:#000;stroke:none}#mermaid-1595125236019 .actor-line{stroke:grey}#mermaid-1595125236019 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333}#mermaid-1595125236019 .messageLine1{stroke-width:1.5;stroke-dasharray:2, 2;stroke:#333}#mermaid-1595125236019 #arrowhead path{fill:#333;stroke:#333}#mermaid-1595125236019 .sequenceNumber{fill:#fff}#mermaid-1595125236019 #sequencenumber{fill:#333}#mermaid-1595125236019 #crosshead path{fill:#333;stroke:#333}#mermaid-1595125236019 .messageText{fill:#333;stroke:#333}#mermaid-1595125236019 .labelBox{stroke:#ccf;fill:#ECECFF}#mermaid-1595125236019 .labelText,#mermaid-1595125236019 .labelText&gt;tspan{fill:#000;stroke:none}#mermaid-1595125236019 .loopText,#mermaid-1595125236019 .loopText&gt;tspan{fill:#000;stroke:none}#mermaid-1595125236019 .loopLine{stroke-width:2px;stroke-dasharray:2, 2;stroke:#ccf;fill:#ccf}#mermaid-1595125236019 .note{stroke:#aa3;fill:#fff5ad}#mermaid-1595125236019 .noteText,#mermaid-1595125236019 .noteText&gt;tspan{fill:#000;stroke:none}#mermaid-1595125236019 .activation0{fill:#f4f4f4;stroke:#666}#mermaid-1595125236019 .activation1{fill:#f4f4f4;stroke:#666}#mermaid-1595125236019 .activation2{fill:#f4f4f4;stroke:#666}#mermaid-1595125236019 .mermaid-main-font{font-family:\"trebuchet ms\", verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .section{stroke:none;opacity:0.2}#mermaid-1595125236019 .section0{fill:rgba(102,102,255,0.49)}#mermaid-1595125236019 .section2{fill:#fff400}#mermaid-1595125236019 .section1,#mermaid-1595125236019 .section3{fill:#fff;opacity:0.2}#mermaid-1595125236019 .sectionTitle0{fill:#333}#mermaid-1595125236019 .sectionTitle1{fill:#333}#mermaid-1595125236019 .sectionTitle2{fill:#333}#mermaid-1595125236019 .sectionTitle3{fill:#333}#mermaid-1595125236019 .sectionTitle{text-anchor:start;font-size:11px;text-height:14px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .grid .tick{stroke:#d3d3d3;opacity:0.8;shape-rendering:crispEdges}#mermaid-1595125236019 .grid .tick text{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .grid path{stroke-width:0}#mermaid-1595125236019 .today{fill:none;stroke:red;stroke-width:2px}#mermaid-1595125236019 .task{stroke-width:2}#mermaid-1595125236019 .taskText{text-anchor:middle;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .taskText:not([font-size]){font-size:11px}#mermaid-1595125236019 .taskTextOutsideRight{fill:#000;text-anchor:start;font-size:11px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .taskTextOutsideLeft{fill:#000;text-anchor:end;font-size:11px}#mermaid-1595125236019 .task.clickable{cursor:pointer}#mermaid-1595125236019 .taskText.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595125236019 .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595125236019 .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1595125236019 .taskText0,#mermaid-1595125236019 .taskText1,#mermaid-1595125236019 .taskText2,#mermaid-1595125236019 .taskText3{fill:#fff}#mermaid-1595125236019 .task0,#mermaid-1595125236019 .task1,#mermaid-1595125236019 .task2,#mermaid-1595125236019 .task3{fill:#8a90dd;stroke:#534fbc}#mermaid-1595125236019 .taskTextOutside0,#mermaid-1595125236019 .taskTextOutside2{fill:#000}#mermaid-1595125236019 .taskTextOutside1,#mermaid-1595125236019 .taskTextOutside3{fill:#000}#mermaid-1595125236019 .active0,#mermaid-1595125236019 .active1,#mermaid-1595125236019 .active2,#mermaid-1595125236019 .active3{fill:#bfc7ff;stroke:#534fbc}#mermaid-1595125236019 .activeText0,#mermaid-1595125236019 .activeText1,#mermaid-1595125236019 .activeText2,#mermaid-1595125236019 .activeText3{fill:#000 !important}#mermaid-1595125236019 .done0,#mermaid-1595125236019 .done1,#mermaid-1595125236019 .done2,#mermaid-1595125236019 .done3{stroke:grey;fill:#d3d3d3;stroke-width:2}#mermaid-1595125236019 .doneText0,#mermaid-1595125236019 .doneText1,#mermaid-1595125236019 .doneText2,#mermaid-1595125236019 .doneText3{fill:#000 !important}#mermaid-1595125236019 .crit0,#mermaid-1595125236019 .crit1,#mermaid-1595125236019 .crit2,#mermaid-1595125236019 .crit3{stroke:#f88;fill:red;stroke-width:2}#mermaid-1595125236019 .activeCrit0,#mermaid-1595125236019 .activeCrit1,#mermaid-1595125236019 .activeCrit2,#mermaid-1595125236019 .activeCrit3{stroke:#f88;fill:#bfc7ff;stroke-width:2}#mermaid-1595125236019 .doneCrit0,#mermaid-1595125236019 .doneCrit1,#mermaid-1595125236019 .doneCrit2,#mermaid-1595125236019 .doneCrit3{stroke:#f88;fill:#d3d3d3;stroke-width:2;cursor:pointer;shape-rendering:crispEdges}#mermaid-1595125236019 .milestone{transform:rotate(45deg) scale(0.8, 0.8)}#mermaid-1595125236019 .milestoneText{font-style:italic}#mermaid-1595125236019 .doneCritText0,#mermaid-1595125236019 .doneCritText1,#mermaid-1595125236019 .doneCritText2,#mermaid-1595125236019 .doneCritText3{fill:#000 !important}#mermaid-1595125236019 .activeCritText0,#mermaid-1595125236019 .activeCritText1,#mermaid-1595125236019 .activeCritText2,#mermaid-1595125236019 .activeCritText3{fill:#000 !important}#mermaid-1595125236019 .titleText{text-anchor:middle;font-size:18px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 g.classGroup text{fill:#9370db;stroke:none;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:10px}#mermaid-1595125236019 g.classGroup text .title{font-weight:bolder}#mermaid-1595125236019 g.clickable{cursor:pointer}#mermaid-1595125236019 g.classGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1595125236019 g.classGroup line{stroke:#9370db;stroke-width:1}#mermaid-1595125236019 .classLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1595125236019 .classLabel .label{fill:#9370db;font-size:10px}#mermaid-1595125236019 .relation{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1595125236019 .dashed-line{stroke-dasharray:3}#mermaid-1595125236019 #compositionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 #compositionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 #aggregationStart{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 #aggregationEnd{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 #dependencyStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 #dependencyEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 #extensionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 #extensionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1595125236019 .commit-id,#mermaid-1595125236019 .commit-msg,#mermaid-1595125236019 .branch-label{fill:lightgrey;color:lightgrey;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .pieTitleText{text-anchor:middle;font-size:25px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .slice{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px}#mermaid-1595125236019 g.stateGroup .state-title{font-weight:bolder;fill:#000}#mermaid-1595125236019 g.stateGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1595125236019 g.stateGroup line{stroke:#9370db;stroke-width:1}#mermaid-1595125236019 .transition{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1595125236019 .stateGroup .composit{fill:white;border-bottom:1px}#mermaid-1595125236019 .stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px}#mermaid-1595125236019 .state-note{stroke:#aa3;fill:#fff5ad}#mermaid-1595125236019 .state-note text{fill:black;stroke:none;font-size:10px}#mermaid-1595125236019 .stateLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1595125236019 .stateLabel text{fill:#000;font-size:10px;font-weight:bold;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1595125236019 .node circle.state-start{fill:black;stroke:black}#mermaid-1595125236019 .node circle.state-end{fill:black;stroke:white;stroke-width:1.5}#mermaid-1595125236019 #statediagram-barbEnd{fill:#9370db}#mermaid-1595125236019 .statediagram-cluster rect{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1595125236019 .statediagram-cluster rect.outer{rx:5px;ry:5px}#mermaid-1595125236019 .statediagram-state .divider{stroke:#9370db}#mermaid-1595125236019 .statediagram-state .title-state{rx:5px;ry:5px}#mermaid-1595125236019 .statediagram-cluster.statediagram-cluster .inner{fill:white}#mermaid-1595125236019 .statediagram-cluster.statediagram-cluster-alt .inner{fill:#e0e0e0}#mermaid-1595125236019 .statediagram-cluster .inner{rx:0;ry:0}#mermaid-1595125236019 .statediagram-state rect.basic{rx:5px;ry:5px}#mermaid-1595125236019 .statediagram-state rect.divider{stroke-dasharray:10,10;fill:#efefef}#mermaid-1595125236019 .note-edge{stroke-dasharray:5}#mermaid-1595125236019 .statediagram-note rect{fill:#fff5ad;stroke:#aa3;stroke-width:1px;rx:0;ry:0}:root{--mermaid-font-family: '\"trebuchet ms\", verdana, arial';--mermaid-font-family: \"Comic Sans MS\", \"Comic Sans\", cursive}#mermaid-1595125236019 .error-icon{fill:#522}#mermaid-1595125236019 .error-text{fill:#522;stroke:#522}#mermaid-1595125236019 .edge-thickness-normal{stroke-width:2px}#mermaid-1595125236019 .edge-thickness-thick{stroke-width:3.5px}#mermaid-1595125236019 .edge-pattern-solid{stroke-dasharray:0}#mermaid-1595125236019 .edge-pattern-dashed{stroke-dasharray:3}#mermaid-1595125236019 .edge-pattern-dotted{stroke-dasharray:2}#mermaid-1595125236019 .marker{fill:#333}#mermaid-1595125236019 .marker.cross{stroke:#333}\n\n:root { --mermaid-font-family: \"trebuchet ms\", verdana, arial;}"
        }
      </style>
      <style>
        {
          '#mermaid-1595125236019 {\n    color: rgb(0, 0, 0);\n    font: 16px "trebuchet ms", verdana, arial;\n  }'
        }
      </style>
      <g />
      <g>
        <line
          id="actor0"
          x1={75}
          y1={5}
          x2={75}
          y2={407}
          className="actor-line"
          strokeWidth="0.5px"
          stroke="#999"
        />
        <rect
          x={0}
          y={0}
          fill="#eaeaea"
          stroke="#666"
          width={150}
          height={65}
          rx={3}
          ry={3}
          className="actor"
        />
        <text
          x={75}
          y={32.5}
          dominantBaseline="central"
          alignmentBaseline="central"
          className="actor"
          style={{
            textAnchor: "middle",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Open-Sans, sans-serif",
          }}
        >
          <tspan x={75} dy={0}>
            {"dispatch"}
          </tspan>
        </text>
      </g>
      <g>
        <line
          id="actor1"
          x1={275}
          y1={5}
          x2={275}
          y2={407}
          className="actor-line"
          strokeWidth="0.5px"
          stroke="#999"
        />
        <rect
          x={200}
          y={0}
          fill="#eaeaea"
          stroke="#666"
          width={150}
          height={65}
          rx={3}
          ry={3}
          className="actor"
        />
        <text
          x={275}
          y={32.5}
          dominantBaseline="central"
          alignmentBaseline="central"
          className="actor"
          style={{
            textAnchor: "middle",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Open-Sans, sans-serif",
          }}
        >
          <tspan x={275} dy={0}>
            {"state"}
          </tspan>
        </text>
      </g>
      <g>
        <line
          id="actor2"
          x1={510}
          y1={5}
          x2={510}
          y2={407}
          className="actor-line"
          strokeWidth="0.5px"
          stroke="#999"
        />
        <rect
          x={435}
          y={0}
          fill="#eaeaea"
          stroke="#666"
          width={150}
          height={65}
          rx={3}
          ry={3}
          className="actor"
        />
        <text
          x={510}
          y={32.5}
          dominantBaseline="central"
          alignmentBaseline="central"
          className="actor"
          style={{
            textAnchor: "middle",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Open-Sans, sans-serif",
          }}
        >
          <tspan x={510} dy={0}>
            {"reducer"}
          </tspan>
        </text>
      </g>
      <defs>
        <marker
          id="arrowhead"
          refX={5}
          refY={2}
          markerWidth={6}
          markerHeight={4}
          orient="auto"
        >
          <path d="M 0,0 V 4 L6,2 Z" />
        </marker>
      </defs>
      <defs>
        <marker
          id="crosshead"
          markerWidth={15}
          markerHeight={8}
          orient="auto"
          refX={16}
          refY={4}
        >
          <path
            fill="black"
            stroke="#000000"
            strokeWidth="1px"
            d="M 9,2 V 6 L16,4 Z"
            style={{
              strokeDasharray: "0, 0",
            }}
          />
          <path
            fill="none"
            stroke="#000000"
            strokeWidth="1px"
            d="M 0,1 L 6,7 M 6,1 L 0,7"
            style={{
              strokeDasharray: "0, 0",
            }}
          />
        </marker>
      </defs>
      <defs>
        <marker
          id="sequencenumber"
          refX={15}
          refY={15}
          markerWidth={60}
          markerHeight={40}
          orient="auto"
        >
          <circle cx={15} cy={15} r={6} />
        </marker>
      </defs>
      <text
        x={293}
        y={105}
        textAnchor="middle"
        dominantBaseline="middle"
        alignmentBaseline="middle"
        className="messageText"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        {"action"}
      </text>
      <line
        x1={75}
        y1={138}
        x2={510}
        y2={138}
        className="messageLine0"
        strokeWidth={2}
        stroke="none"
        markerEnd="url(#arrowhead)"
        markerStart="url(#sequencenumber)"
        style={{
          fill: "none",
        }}
      />
      <text
        x={75}
        y={142}
        fontFamily="sans-serif"
        fontSize="12px"
        textAnchor="middle"
        textLength="16px"
        className="sequenceNumber"
      >
        {"1"}
      </text>
      <text
        x={393}
        y={153}
        textAnchor="middle"
        dominantBaseline="middle"
        alignmentBaseline="middle"
        className="messageText"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        {"current state"}
      </text>
      <line
        x1={275}
        y1={186}
        x2={510}
        y2={186}
        className="messageLine0"
        strokeWidth={2}
        stroke="none"
        markerEnd="url(#arrowhead)"
        markerStart="url(#sequencenumber)"
        style={{
          fill: "none",
        }}
      />
      <text
        x={275}
        y={190}
        fontFamily="sans-serif"
        fontSize="12px"
        textAnchor="middle"
        textLength="16px"
        className="sequenceNumber"
      >
        {"2"}
      </text>
      <g>
        <line x1={65} y1={75} x2={520} y2={75} className="loopLine" />
        <line x1={520} y1={75} x2={520} y2={196} className="loopLine" />
        <line x1={65} y1={196} x2={520} y2={196} className="loopLine" />
        <line x1={65} y1={75} x2={65} y2={196} className="loopLine" />
        <polygon
          points="65,75 115,75 115,88 106.6,95 65,95"
          className="labelBox"
        />
        <text
          x={90}
          y={88}
          textAnchor="middle"
          dominantBaseline="middle"
          alignmentBaseline="middle"
          className="labelText"
          style={{
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          {"par"}
        </text>
        <text
          x={317.5}
          y={93}
          textAnchor="middle"
          className="loopText"
          style={{
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          <tspan x={317.5} />
        </text>
      </g>
      <text
        x={510}
        y={211}
        textAnchor="middle"
        dominantBaseline="middle"
        alignmentBaseline="middle"
        className="messageText"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        {"compute new state"}
      </text>
      <path
        d="M 510,244 C 570,234 570,274 510,264"
        className="messageLine0"
        strokeWidth={2}
        stroke="none"
        markerEnd="url(#arrowhead)"
        markerStart="url(#sequencenumber)"
        style={{
          fill: "none",
        }}
      />
      <text
        x={510}
        y={248}
        fontFamily="sans-serif"
        fontSize="12px"
        textAnchor="middle"
        textLength="16px"
        className="sequenceNumber"
      >
        {"3"}
      </text>
      <text
        x={393}
        y={289}
        textAnchor="middle"
        dominantBaseline="middle"
        alignmentBaseline="middle"
        className="messageText"
        dy="1em"
        style={{
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        {"replace with new state"}
      </text>
      <line
        x1={510}
        y1={322}
        x2={275}
        y2={322}
        className="messageLine1"
        strokeWidth={2}
        stroke="none"
        markerEnd="url(#arrowhead)"
        markerStart="url(#sequencenumber)"
        style={{
          strokeDasharray: "3, 3",
          fill: "none",
        }}
      />
      <text
        x={510}
        y={326}
        fontFamily="sans-serif"
        fontSize="12px"
        textAnchor="middle"
        textLength="16px"
        className="sequenceNumber"
      >
        {"4"}
      </text>
      <g>
        <rect
          x={0}
          y={342}
          fill="#eaeaea"
          stroke="#666"
          width={150}
          height={65}
          rx={3}
          ry={3}
          className="actor"
        />
        <text
          x={75}
          y={374.5}
          dominantBaseline="central"
          alignmentBaseline="central"
          className="actor"
          style={{
            textAnchor: "middle",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Open-Sans, sans-serif",
          }}
        >
          <tspan x={75} dy={0}>
            {"dispatch"}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          x={200}
          y={342}
          fill="#eaeaea"
          stroke="#666"
          width={150}
          height={65}
          rx={3}
          ry={3}
          className="actor"
        />
        <text
          x={275}
          y={374.5}
          dominantBaseline="central"
          alignmentBaseline="central"
          className="actor"
          style={{
            textAnchor: "middle",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Open-Sans, sans-serif",
          }}
        >
          <tspan x={275} dy={0}>
            {"state"}
          </tspan>
        </text>
      </g>
      <g>
        <rect
          x={435}
          y={342}
          fill="#eaeaea"
          stroke="#666"
          width={150}
          height={65}
          rx={3}
          ry={3}
          className="actor"
        />
        <text
          x={510}
          y={374.5}
          dominantBaseline="central"
          alignmentBaseline="central"
          className="actor"
          style={{
            textAnchor: "middle",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Open-Sans, sans-serif",
          }}
        >
          <tspan x={510} dy={0}>
            {"reducer"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgDispatchFlow;
