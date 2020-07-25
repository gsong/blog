/** @jsx jsx */
import { jsx } from "theme-ui";

import { svgStyle } from "./DispatchFlow";

function SvgFormStateChart(props) {
  return (
    <svg
      id="mermaid-1596401273945"
      width="100%"
      height="100%"
      viewBox="0 0 282.00390625 320"
      aria-labelledby="form-state-chart"
      sx={{ ...svgStyle, maxWidth: 283 }}
      {...props}
    >
      <title id="form-state-chart">
        State chart describing form states and transitions
      </title>
      <style>
        {
          "#mermaid-1596401273945 .label{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);fill:#333;color:#333}#mermaid-1596401273945 .label text{fill:#333}#mermaid-1596401273945 .node rect,#mermaid-1596401273945 .node circle,#mermaid-1596401273945 .node ellipse,#mermaid-1596401273945 .node polygon,#mermaid-1596401273945 .node path{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1596401273945 .node .label{text-align:center;fill:#333}#mermaid-1596401273945 .node.clickable{cursor:pointer}#mermaid-1596401273945 .arrowheadPath{fill:#333}#mermaid-1596401273945 .edgePath .path{stroke:#333;stroke-width:1.5px}#mermaid-1596401273945 .flowchart-link{stroke:#333;fill:none}#mermaid-1596401273945 .edgeLabel{background-color:#e8e8e8;text-align:center}#mermaid-1596401273945 .edgeLabel rect{opacity:0.9}#mermaid-1596401273945 .edgeLabel span{color:#333}#mermaid-1596401273945 .cluster rect{fill:#ffffde;stroke:#aa3;stroke-width:1px}#mermaid-1596401273945 .cluster text{fill:#333}#mermaid-1596401273945 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:12px;background:#ffffde;border:1px solid #aa3;border-radius:2px;pointer-events:none;z-index:100}#mermaid-1596401273945 .actor{stroke:#ccf;fill:#ECECFF}#mermaid-1596401273945 text.actor&gt;tspan{fill:#000;stroke:none}#mermaid-1596401273945 .actor-line{stroke:grey}#mermaid-1596401273945 .messageLine0{stroke-width:1.5;stroke-dasharray:none;stroke:#333}#mermaid-1596401273945 .messageLine1{stroke-width:1.5;stroke-dasharray:2, 2;stroke:#333}#mermaid-1596401273945 #arrowhead path{fill:#333;stroke:#333}#mermaid-1596401273945 .sequenceNumber{fill:#fff}#mermaid-1596401273945 #sequencenumber{fill:#333}#mermaid-1596401273945 #crosshead path{fill:#333;stroke:#333}#mermaid-1596401273945 .messageText{fill:#333;stroke:#333}#mermaid-1596401273945 .labelBox{stroke:#ccf;fill:#ECECFF}#mermaid-1596401273945 .labelText,#mermaid-1596401273945 .labelText&gt;tspan{fill:#000;stroke:none}#mermaid-1596401273945 .loopText,#mermaid-1596401273945 .loopText&gt;tspan{fill:#000;stroke:none}#mermaid-1596401273945 .loopLine{stroke-width:2px;stroke-dasharray:2, 2;stroke:#ccf;fill:#ccf}#mermaid-1596401273945 .note{stroke:#aa3;fill:#fff5ad}#mermaid-1596401273945 .noteText,#mermaid-1596401273945 .noteText&gt;tspan{fill:#000;stroke:none}#mermaid-1596401273945 .activation0{fill:#f4f4f4;stroke:#666}#mermaid-1596401273945 .activation1{fill:#f4f4f4;stroke:#666}#mermaid-1596401273945 .activation2{fill:#f4f4f4;stroke:#666}#mermaid-1596401273945 .mermaid-main-font{font-family:\"trebuchet ms\", verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .section{stroke:none;opacity:0.2}#mermaid-1596401273945 .section0{fill:rgba(102,102,255,0.49)}#mermaid-1596401273945 .section2{fill:#fff400}#mermaid-1596401273945 .section1,#mermaid-1596401273945 .section3{fill:#fff;opacity:0.2}#mermaid-1596401273945 .sectionTitle0{fill:#333}#mermaid-1596401273945 .sectionTitle1{fill:#333}#mermaid-1596401273945 .sectionTitle2{fill:#333}#mermaid-1596401273945 .sectionTitle3{fill:#333}#mermaid-1596401273945 .sectionTitle{text-anchor:start;font-size:11px;text-height:14px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .grid .tick{stroke:#d3d3d3;opacity:0.8;shape-rendering:crispEdges}#mermaid-1596401273945 .grid .tick text{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .grid path{stroke-width:0}#mermaid-1596401273945 .today{fill:none;stroke:red;stroke-width:2px}#mermaid-1596401273945 .task{stroke-width:2}#mermaid-1596401273945 .taskText{text-anchor:middle;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .taskText:not([font-size]){font-size:11px}#mermaid-1596401273945 .taskTextOutsideRight{fill:#000;text-anchor:start;font-size:11px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .taskTextOutsideLeft{fill:#000;text-anchor:end;font-size:11px}#mermaid-1596401273945 .task.clickable{cursor:pointer}#mermaid-1596401273945 .taskText.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1596401273945 .taskTextOutsideLeft.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1596401273945 .taskTextOutsideRight.clickable{cursor:pointer;fill:#003163 !important;font-weight:bold}#mermaid-1596401273945 .taskText0,#mermaid-1596401273945 .taskText1,#mermaid-1596401273945 .taskText2,#mermaid-1596401273945 .taskText3{fill:#fff}#mermaid-1596401273945 .task0,#mermaid-1596401273945 .task1,#mermaid-1596401273945 .task2,#mermaid-1596401273945 .task3{fill:#8a90dd;stroke:#534fbc}#mermaid-1596401273945 .taskTextOutside0,#mermaid-1596401273945 .taskTextOutside2{fill:#000}#mermaid-1596401273945 .taskTextOutside1,#mermaid-1596401273945 .taskTextOutside3{fill:#000}#mermaid-1596401273945 .active0,#mermaid-1596401273945 .active1,#mermaid-1596401273945 .active2,#mermaid-1596401273945 .active3{fill:#bfc7ff;stroke:#534fbc}#mermaid-1596401273945 .activeText0,#mermaid-1596401273945 .activeText1,#mermaid-1596401273945 .activeText2,#mermaid-1596401273945 .activeText3{fill:#000 !important}#mermaid-1596401273945 .done0,#mermaid-1596401273945 .done1,#mermaid-1596401273945 .done2,#mermaid-1596401273945 .done3{stroke:grey;fill:#d3d3d3;stroke-width:2}#mermaid-1596401273945 .doneText0,#mermaid-1596401273945 .doneText1,#mermaid-1596401273945 .doneText2,#mermaid-1596401273945 .doneText3{fill:#000 !important}#mermaid-1596401273945 .crit0,#mermaid-1596401273945 .crit1,#mermaid-1596401273945 .crit2,#mermaid-1596401273945 .crit3{stroke:#f88;fill:red;stroke-width:2}#mermaid-1596401273945 .activeCrit0,#mermaid-1596401273945 .activeCrit1,#mermaid-1596401273945 .activeCrit2,#mermaid-1596401273945 .activeCrit3{stroke:#f88;fill:#bfc7ff;stroke-width:2}#mermaid-1596401273945 .doneCrit0,#mermaid-1596401273945 .doneCrit1,#mermaid-1596401273945 .doneCrit2,#mermaid-1596401273945 .doneCrit3{stroke:#f88;fill:#d3d3d3;stroke-width:2;cursor:pointer;shape-rendering:crispEdges}#mermaid-1596401273945 .milestone{transform:rotate(45deg) scale(0.8, 0.8)}#mermaid-1596401273945 .milestoneText{font-style:italic}#mermaid-1596401273945 .doneCritText0,#mermaid-1596401273945 .doneCritText1,#mermaid-1596401273945 .doneCritText2,#mermaid-1596401273945 .doneCritText3{fill:#000 !important}#mermaid-1596401273945 .activeCritText0,#mermaid-1596401273945 .activeCritText1,#mermaid-1596401273945 .activeCritText2,#mermaid-1596401273945 .activeCritText3{fill:#000 !important}#mermaid-1596401273945 .titleText{text-anchor:middle;font-size:18px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 g.classGroup text{fill:#9370db;stroke:none;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family);font-size:10px}#mermaid-1596401273945 g.classGroup text .title{font-weight:bolder}#mermaid-1596401273945 g.clickable{cursor:pointer}#mermaid-1596401273945 g.classGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1596401273945 g.classGroup line{stroke:#9370db;stroke-width:1}#mermaid-1596401273945 .classLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.5}#mermaid-1596401273945 .classLabel .label{fill:#9370db;font-size:10px}#mermaid-1596401273945 .relation{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1596401273945 .dashed-line{stroke-dasharray:3}#mermaid-1596401273945 #compositionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 #compositionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 #aggregationStart{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 #aggregationEnd{fill:#ECECFF;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 #dependencyStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 #dependencyEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 #extensionStart{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 #extensionEnd{fill:#9370db;stroke:#9370db;stroke-width:1}#mermaid-1596401273945 .commit-id,#mermaid-1596401273945 .commit-msg,#mermaid-1596401273945 .branch-label{fill:lightgrey;color:lightgrey;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .pieTitleText{text-anchor:middle;font-size:25px;fill:#000;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .slice{font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 g.stateGroup text{fill:#9370db;stroke:none;font-size:10px;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 g.stateGroup text{fill:#9370db;fill:#333;stroke:none;font-size:10px}#mermaid-1596401273945 g.statediagram-cluster .cluster-label text{fill:#333}#mermaid-1596401273945 g.stateGroup .state-title{font-weight:bolder;fill:#000}#mermaid-1596401273945 g.stateGroup rect{fill:#ECECFF;stroke:#9370db}#mermaid-1596401273945 g.stateGroup line{stroke:#9370db;stroke-width:1}#mermaid-1596401273945 .transition{stroke:#9370db;stroke-width:1;fill:none}#mermaid-1596401273945 .stateGroup .composit{fill:white;border-bottom:1px}#mermaid-1596401273945 .stateGroup .alt-composit{fill:#e0e0e0;border-bottom:1px}#mermaid-1596401273945 .state-note{stroke:#aa3;fill:#fff5ad}#mermaid-1596401273945 .state-note text{fill:black;stroke:none;font-size:10px}#mermaid-1596401273945 .stateLabel .box{stroke:none;stroke-width:0;fill:#ECECFF;opacity:0.7}#mermaid-1596401273945 .edgeLabel text{fill:#333}#mermaid-1596401273945 .stateLabel text{fill:#000;font-size:10px;font-weight:bold;font-family:'trebuchet ms', verdana, arial;font-family:var(--mermaid-font-family)}#mermaid-1596401273945 .node circle.state-start{fill:black;stroke:black}#mermaid-1596401273945 .node circle.state-end{fill:black;stroke:white;stroke-width:1.5}#mermaid-1596401273945 #statediagram-barbEnd{fill:#9370db}#mermaid-1596401273945 .statediagram-cluster rect{fill:#ECECFF;stroke:#9370db;stroke-width:1px}#mermaid-1596401273945 .statediagram-cluster rect.outer{rx:5px;ry:5px}#mermaid-1596401273945 .statediagram-state .divider{stroke:#9370db}#mermaid-1596401273945 .statediagram-state .title-state{rx:5px;ry:5px}#mermaid-1596401273945 .statediagram-cluster.statediagram-cluster .inner{fill:white}#mermaid-1596401273945 .statediagram-cluster.statediagram-cluster-alt .inner{fill:#e0e0e0}#mermaid-1596401273945 .statediagram-cluster .inner{rx:0;ry:0}#mermaid-1596401273945 .statediagram-state rect.basic{rx:5px;ry:5px}#mermaid-1596401273945 .statediagram-state rect.divider{stroke-dasharray:10,10;fill:#efefef}#mermaid-1596401273945 .note-edge{stroke-dasharray:5}#mermaid-1596401273945 .statediagram-note rect{fill:#fff5ad;stroke:#aa3;stroke-width:1px;rx:0;ry:0}:root{--mermaid-font-family: '\"trebuchet ms\", verdana, arial';--mermaid-font-family: \"Comic Sans MS\", \"Comic Sans\", cursive}#mermaid-1596401273945 .error-icon{fill:#522}#mermaid-1596401273945 .error-text{fill:#522;stroke:#522}#mermaid-1596401273945 .edge-thickness-normal{stroke-width:2px}#mermaid-1596401273945 .edge-thickness-thick{stroke-width:3.5px}#mermaid-1596401273945 .edge-pattern-solid{stroke-dasharray:0}#mermaid-1596401273945 .edge-pattern-dashed{stroke-dasharray:3}#mermaid-1596401273945 .edge-pattern-dotted{stroke-dasharray:2}#mermaid-1596401273945 .marker{fill:#333}#mermaid-1596401273945 .marker.cross{stroke:#333}\n\n:root { --mermaid-font-family: \"trebuchet ms\", verdana, arial;}"
        }
      </style>
      <style>
        {
          '#mermaid-1596401273945 {\n    color: rgb(0, 0, 0);\n    font: 16px "trebuchet ms", verdana, arial;\n  }'
        }
      </style>
      <g>
        <defs>
          <marker
            id="statediagram-barbEnd"
            refX={19}
            refY={7}
            markerWidth={20}
            markerHeight={14}
            markerUnits={0}
            orient="auto"
          >
            <path d="M 19,7 L9,13 L14,7 L9,1 Z" />
          </marker>
        </defs>
        <g className="root">
          <g className="clusters" />
          <g className="edgePaths">
            <path
              d="M99.48046875,22L99.48046875,26.166666666666668C99.48046875,30.333333333333332,99.48046875,38.666666666666664,99.48046875,47C99.48046875,55.333333333333336,99.48046875,63.666666666666664,99.48046875,67.83333333333333L99.48046875,72"
              id="edge0"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
            <path
              d="M131.92578125,81.40658946689133L138.62456597222223,79.83882455574278C145.32335069444446,78.27105964459422,158.72092013888889,75.1355298222971,167.09440104166666,73.56776491114856C175.46788194444446,72,178.81727430555554,72,182.16666666666666,74.83333333333333C185.51605902777774,77.66666666666667,188.86545138888889,83.33333333333333,188.86545138888889,89C188.86545138888889,94.66666666666667,185.51605902777774,100.33333333333333,182.16666666666666,103.16666666666667C178.81727430555554,106,175.46788194444446,106,167.09440104166666,104.43223508885144C158.72092013888889,102.8644701777029,145.32335069444446,99.72894035540578,138.62456597222223,98.16117544425721L131.92578125,96.59341053310867"
              id="edge1"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
            <path
              d="M131.92578125,84.20362779954256L145.68446180555554,82.16968983295213C159.44314236111111,80.1357518663617,186.9605034722222,76.06787593318086,204.15885416666666,74.03393796659043C221.3572048611111,72,228.2365451388889,72,235.11588541666666,74.83333333333333C241.99522569444446,77.66666666666667,248.87456597222226,83.33333333333333,248.87456597222226,89C248.87456597222226,94.66666666666667,241.99522569444446,100.33333333333333,235.11588541666666,103.16666666666667C228.2365451388889,106,221.3572048611111,106,204.15885416666666,103.96606203340957C186.9605034722222,101.93212406681914,159.44314236111111,97.86424813363828,145.68446180555554,95.83031016704787L131.92578125,93.79637220045744"
              id="edge2"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
            <path
              d="M84.30244993932038,106L79.16870828276699,111.75C74.03496662621359,117.5,63.767483313106794,129,58.63374165655339,140.5C53.5,152,53.5,163.5,53.5,169.25L53.5,175"
              id="edge3"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
            <path
              d="M53.5,209L53.5,214.75C53.5,220.5,53.5,232,57.35412242111651,243.5C61.20824484223301,255,68.91648968446601,266.5,72.77061210558253,272.25L76.62473452669903,278"
              id="edge4"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
            <path
              d="M94.47072208737865,209L108.32846632281553,214.75C122.18621055825243,220.5,149.9016990291262,232,167.8045926881068,243.5C185.70748634708738,255,193.79778519417474,266.5,197.84293461771847,272.25L201.88808404126215,278"
              id="edge5"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
            <path
              d="M103.19755006067962,278L108.33129171723301,272.25C113.46503337378641,266.5,123.73251668689322,255,128.86625834344662,240.66666666666666C134,226.33333333333334,134,209.16666666666666,134,192C134,174.83333333333334,134,157.66666666666666,130.1458775788835,143.33333333333334C126.29175515776699,129,118.58351031553399,117.5,114.72938789441747,111.75L110.87526547330097,106"
              id="edge6"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
            <path
              d="M222.6558328276699,278L225.63506902305826,272.25C228.6143052184466,266.5,234.5727776092233,255,237.55201380461165,240.66666666666666C240.53125,226.33333333333334,240.53125,209.16666666666666,240.53125,192C240.53125,174.83333333333334,240.53125,157.66666666666666,222.43033854166666,142.4743877334367C204.32942708333334,127.28210880020679,168.12760416666666,114.06421760041356,150.02669270833334,107.45527200051696L131.92578125,100.84632640062034"
              id="edge7"
              className=" edge-thickness-normal transition"
              markerEnd="url(#statediagram-barbEnd)"
            />
          </g>
          <g className="edgeLabels">
            <g className="edgeLabel">
              <g className="label" transform="translate(0, 0)">
                <rect
                  rx={0}
                  ry={0}
                  width={0}
                  height={0}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={0} height={0}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel" />
                  </div>
                </foreignObject>
              </g>
            </g>
            <g className="edgeLabel" transform="translate(192.21484375, 89)">
              <g className="label" transform="translate(-25.2890625, -9.5)">
                <rect
                  rx={0}
                  ry={0}
                  width={50.578125}
                  height={19}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={50.578125} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel">{"change"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g className="edgeLabel" transform="translate(255.75390625, 89)">
              <g className="label" transform="translate(-18.25, -9.5)">
                <rect
                  rx={0}
                  ry={0}
                  width={36.5}
                  height={19}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={36.5} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel">{"reset"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g className="edgeLabel" transform="translate(53.5, 140.5)">
              <g className="label" transform="translate(-24.1640625, -9.5)">
                <rect
                  rx={0}
                  ry={0}
                  width={48.328125}
                  height={19}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={48.328125} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel">{"submit"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g className="edgeLabel" transform="translate(53.5, 243.5)">
              <g className="label" transform="translate(-25.6484375, -9.5)">
                <rect
                  rx={0}
                  ry={0}
                  width={51.296875}
                  height={19}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={51.296875} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel">{"resolve"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g className="edgeLabel" transform="translate(177.6171875, 243.5)">
              <g className="label" transform="translate(-21.90625, -9.5)">
                <rect
                  rx={0}
                  ry={0}
                  width={43.8125}
                  height={19}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={43.8125} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel">{"reject"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g className="edgeLabel">
              <g className="label" transform="translate(0, 0)">
                <rect
                  rx={0}
                  ry={0}
                  width={0}
                  height={0}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={0} height={0}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel" />
                  </div>
                </foreignObject>
              </g>
            </g>
            <g className="edgeLabel">
              <g className="label" transform="translate(0, 0)">
                <rect
                  rx={0}
                  ry={0}
                  width={0}
                  height={0}
                  style={{
                    fill: "#e8e8e8",
                  }}
                />
                <foreignObject width={0} height={0}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="edgeLabel" />
                  </div>
                </foreignObject>
              </g>
            </g>
          </g>
          <g className="nodes">
            <g
              className="node default"
              id="root_start"
              transform="translate(99.48046875, 15)"
            >
              <circle className="state-start" r={7} width={14} height={14} />
            </g>
            <g
              className="node statediagram-state"
              id="editing"
              transform="translate(99.48046875, 89)"
            >
              <rect
                className="basic label-container"
                x={-32.4453125}
                y={-17}
                width={64.890625}
                height={34}
              />
              <g className="label" transform="translate(-24.9453125, -9.5)">
                <foreignObject width={49.890625} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="nodeLabel">{"editing"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g
              className="node statediagram-state"
              id="submitting"
              transform="translate(53.5, 192)"
            >
              <rect
                className="basic label-container"
                x={-45.5}
                y={-17}
                width={91}
                height={34}
              />
              <g className="label" transform="translate(-38, -9.5)">
                <foreignObject width={76} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="nodeLabel">{"submitting"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g
              className="node statediagram-state"
              id="resolved"
              transform="translate(88.01953125, 295)"
            >
              <rect
                className="basic label-container"
                x={-37.6015625}
                y={-17}
                width={75.203125}
                height={34}
              />
              <g className="label" transform="translate(-30.1015625, -9.5)">
                <foreignObject width={60.203125} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="nodeLabel">{"resolved"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
            <g
              className="node statediagram-state"
              id="rejected"
              transform="translate(213.84765625, 295)"
            >
              <rect
                className="basic label-container"
                x={-38.2265625}
                y={-17}
                width={76.453125}
                height={34}
              />
              <g className="label" transform="translate(-30.7265625, -9.5)">
                <foreignObject width={61.453125} height={19}>
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="nodeLabel">{"rejected"}</span>
                  </div>
                </foreignObject>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgFormStateChart;
