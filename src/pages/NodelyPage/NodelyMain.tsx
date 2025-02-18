import React, { useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

const GraphView: React.FC = () => {
  const [graphData, setGraphData] = useState<{
    nodes: { id: string }[];
    links: { source: string; target: string }[];
  }>({
    nodes: [],
    links: []
  });

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    setGraphData({
      nodes: [
        { id: "Nodely" },
        { id: "Task 1" },
        { id: "Task 2" },
        { id: "Task 3" },
        { id: "Task 4" }
      ],
      links: [
        { source: "Nodely", target: "Task 1" },
        { source: "Nodely", target: "Task 2" },
        { source: "Task 1", target: "Task 3" },
        { source: "Task 2", target: "Task 4" }
      ]
    });

    // Update dimensions on window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#1E1E1E" }}>
      <ForceGraph2D
        graphData={graphData}
        nodeAutoColorBy="id"
        linkDirectionalParticles={2}
        linkDirectionalArrowLength={3.5}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};

export default GraphView;
