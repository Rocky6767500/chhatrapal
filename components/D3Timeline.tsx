"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: 2015,
    title: "Digital Awakening",
    description: "Discovered the fusion of traditional surrealism with digital tools",
  },
  {
    year: 2017,
    title: "First Exhibition",
    description: "Debuted 'Dreams in Code' at NYC Digital Arts Museum",
  },
  {
    year: 2019,
    title: "AI Collaboration",
    description: "Pioneered AI-human collaborative art processes",
  },
  {
    year: 2021,
    title: "Web3 Pioneer",
    description: "Launched first NFT collection 'Fractured Realities'",
  },
  {
    year: 2023,
    title: "International Recognition",
    description: "Featured at Venice Biennale Digital Arts Pavilion",
  },
  {
    year: 2024,
    title: "Present",
    description: "Pushing boundaries with generative GLSL art",
  },
];

export default function D3Timeline() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = 600;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    const xScale = d3
      .scaleLinear()
      .domain([2015, 2024])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, events.length - 1])
      .range([margin.top, height - margin.bottom]);

    // Draw connecting line
    const line = d3
      .line<TimelineEvent>()
      .x((d) => xScale(d.year))
      .y((d, i) => yScale(i))
      .curve(d3.curveCatmullRom);

    svg
      .append("path")
      .datum(events)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "#E94560")
      .attr("stroke-width", 3)
      .attr("opacity", 0.6);

    // Create nodes
    const nodes = svg
      .selectAll(".node")
      .data(events)
      .join("g")
      .attr("class", "node")
      .attr("transform", (d, i) => `translate(${xScale(d.year)}, ${yScale(i)})`);

    // Add circles
    nodes
      .append("circle")
      .attr("r", 0)
      .attr("fill", "#E94560")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 200)
      .attr("r", 12);

    // Add year labels
    nodes
      .append("text")
      .attr("x", -20)
      .attr("y", -20)
      .attr("fill", "#ffffff")
      .attr("font-size", "18px")
      .attr("font-weight", "bold")
      .attr("opacity", 0)
      .text((d) => d.year)
      .transition()
      .duration(500)
      .delay((d, i) => i * 200 + 500)
      .attr("opacity", 1);

    // Add title labels
    nodes
      .append("text")
      .attr("x", 20)
      .attr("y", 5)
      .attr("fill", "#E94560")
      .attr("font-size", "16px")
      .attr("font-weight", "600")
      .attr("opacity", 0)
      .text((d) => d.title)
      .transition()
      .duration(500)
      .delay((d, i) => i * 200 + 700)
      .attr("opacity", 1);

    // Add description labels
    nodes
      .append("text")
      .attr("x", 20)
      .attr("y", 25)
      .attr("fill", "#ffffff")
      .attr("font-size", "14px")
      .attr("opacity", 0)
      .text((d) => d.description)
      .call((text) =>
        text.each(function (d) {
          const words = d.description.split(" ");
          const lineHeight = 1.2;
          const y = 25;
          const x = 20;
          d3.select(this).text("");
          
          let line: string[] = [];
          let lineNumber = 0;
          words.forEach((word) => {
            line.push(word);
            const testLine = line.join(" ");
            if (testLine.length > 35) {
              line.pop();
              d3.select(this)
                .append("tspan")
                .attr("x", x)
                .attr("y", y)
                .attr("dy", `${lineNumber * lineHeight}em`)
                .text(line.join(" "));
              line = [word];
              lineNumber++;
            }
          });
          d3.select(this)
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", `${lineNumber * lineHeight}em`)
            .text(line.join(" "));
        })
      )
      .transition()
      .duration(500)
      .delay((d, i) => i * 200 + 900)
      .attr("opacity", 0.8);

    // Add interaction
    nodes
      .on("mouseenter", function () {
        d3.select(this)
          .select("circle")
          .transition()
          .duration(200)
          .attr("r", 16)
          .attr("fill", "#ff5577");
      })
      .on("mouseleave", function () {
        d3.select(this)
          .select("circle")
          .transition()
          .duration(200)
          .attr("r", 12)
          .attr("fill", "#E94560");
      });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="w-full h-[600px]"
      style={{ overflow: "visible" }}
    />
  );
}
