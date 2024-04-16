import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

function InventoryBox({ setForm }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5500/api/analysis/inventory');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        const container = d3.select('.chart-container');
        container.selectAll('*').remove();
        drawChart();
    }, [data]);

    const drawChart = () => {
        if (data.length === 0) return; // Check if data is available
        const svgContainer = d3.select('.chart-container');
        const svgWidth = +svgContainer.style('width').slice(0, -2);
        const svgHeight = 400;
        const svg = svgContainer
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
    
        const margin = { top: 60, right: 20, bottom: 50, left: 80 }; // Increased top margin for legend
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;
    
        const barPadding = 0.2; // Adjust the bar padding here
        const x = d3.scaleBand()
            .rangeRound([0, width])
            .padding(barPadding) // Set the padding
            .domain(data.map(d => `${d.cropName} ${d.year}`));
    
        const barWidth = (width / data.length) * (1 - barPadding); // Adjust the bar width based on padding
    
        const maxAmount = d3.max(data, d => d.amount);
        const yAmount = d3.scaleLinear()
            .rangeRound([height, 0])
            .domain([0, maxAmount]); // Adjust the domain based on the maximum amount of crops
    
        const colorScale = d3.scaleOrdinal()
            .domain(['rabi', 'kharif', 'zaid'])
            .range(['#1f77b4', '#ff7f0e', '#2ca02c']); // Define color for each season
    
        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
    
        g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "rotate(0)") // Rotate the text
            .attr("y", 10) // Adjust the position if necessary
            .attr("dy", "1em")
            .style("text-anchor", "middle"); // Center the text        
    
        g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(yAmount).ticks(10, 's'))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Amount');
    
        g.selectAll('.amount-bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'amount-bar')
            .attr('x', d => x(`${d.cropName} ${d.year}`))
            .attr('y', d => yAmount(d.amount))
            .attr('width', barWidth)
            .attr('height', d => height - yAmount(d.amount))
            .attr('fill', d => colorScale(d.season)); // Color based on the season
    
        // Add text showing the amount on top of each bar
        g.selectAll('.bar-text')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'bar-text')
            .attr('x', d => x(`${d.cropName} ${d.year}`) + barWidth / 2)
            .attr('y', d => yAmount(d.amount) - 5) // Position the text above the bar
            .attr('text-anchor', 'middle')
            .text(d => d.amount);

            
    
        // Show legend at the top left corner
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${margin.left},${margin.top - 40})`);
    
        const seasons = ['rabi','zaid','kharif'];
        const legendSize = 15;
        const legendSpacing = 60;
        
        legend.selectAll('.legend-box')
            .data(seasons)
            .enter().append('rect')
            .attr('class', 'legend-box')
            .attr('x', (d, i) => i * legendSpacing)
            .attr('y', 0)
            .attr('width', legendSize)
            .attr('height', legendSize)
            .attr('fill', d => colorScale(d));
    
        // Add labels to the legend
        legend.selectAll('.legend-label')
            .data(seasons)
            .enter().append('text')
            .attr('class', 'legend-label')
            .attr('x', (d, i) => i * legendSpacing + legendSize + 5)
            .attr('y', legendSize / 2)
            .attr('dy', '0.35em')
            .text(d => d);
    };
    

    return (
        <div className="flex justify-center h-full">
            <div className='mt-12 w-4/5 sm:w-3/5'>
                <div className="bg-white overflow-hidden shadow rounded-lg border w-full">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Inventory
                        </h3>
                    </div>
                    <div className="chart-container"></div>
                    <div className='text-right py-3 px-5'>
                        <button onClick={()=>setForm(true)} className='bg-[#2b9348] text-white hover:bg-opacity-60 font-bold py-2 px-8 rounded-md transition duration-300 ease-in-out'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryBox;
