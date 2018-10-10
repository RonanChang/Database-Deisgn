import React, { Component } from "react";

import "./Assignment3.css";

class Assignment extends Component {
  render() {
    return (
      <div className="Assignment3">
        <div className="Part" id="part1">
          <div id="name">Part One</div>

          <div className="text">
            <div className="description">
              <p>Description: </p>
              <p>
                " This python script I created is based on data from Assignment
                2. It's about the CPI(Consumer Price Index) for different
                products and goods. "
              </p>

              <p>For assignment 2, I exceprted 4 data files.</p>
              <p>"ah.txt"(series_id = CWSR0000SAH): All US Housing CPI</p>
              <p>"ah1.txt"(series_id = CWSR0000SAH1): US shelter CPI</p>
              <p>
                "ah2.txt"(series_id = CWSR0000SAH2): US Fuels and utilities CPI
              </p>
              <p>
                "test.txt"(series_id = CWSR0000SAH21): US household energy CPI
              </p>
              <p>In part one, I plotted all data line in the same graph</p>
              <p>
                The URL for my data is
                https://catalog.data.gov/dataset/consumer-price-index-urban-wage-earners-and-clerical-workers-current-series/resource/be1ddf3a-9a86-43e7-898e-d5f2b6067939?inner_span=True
              </p>
            </div>

            <div className="graph">
              <img src="ah.png" />
              <div className="graph_explain">
                This is the data for All US housing CPI. In general, the price
                index has been growing pretty steadily. From 1967 to 2018, the
                price is generally increasing along the year, while in the same
                year, the price has been increasing every month too. This chart
                might be of interest to those who would like to predict the
                housing price in the future years in the U.S. The data is only
                availabe till August 2018.
              </div>
            </div>
            <div className="graph">
              <img src="ah1.png" />
              <div className="graph_explain">
                This is the data for All US Shelter CPI. In general, the price
                index has been growing pretty steadily. The maximum of the price
                index is currently at August 2018. This chart might be
                interesting to people who would like to know about the expenses
                on shleters in the U.S., or may be beneficial to the governers
                who wants to calculate the budget or make policies regarding to
                shelters.
              </div>
            </div>
            <div className="graph">
              <img src="ah2.png" />
              <div className="graph_explain">
                This is the data for Fuels and Utility CPI. In general, the
                price index has been growing pretty steadily. However, around
                year 2002 and 2008, the data had more obvious changes than other
                times. This chart might be useful for study related to expenses
                on fuels and utilities at U.S. homes.
              </div>
            </div>
            <div className="graph">
              <img src="test.png" />
              <div className="graph_explain">
                This is the data for Household Energy CPI. In general, the price
                index has been growing pretty steadily. However, around year
                2005 and 2008, the data had more obvious changes than other
                times. And in August July, we can get the peak value for this
                CPI. This chart might be useful for study related to expenses on
                household energyies at U.S. homes.
              </div>
            </div>
            <div className="graph">
              <img src="ah1_partly.png" />
              <div className="graph_explain">
                This is part of the graph from 1978 - 2013. This graph is a
                demostration of function in my python script which allows the
                user to choose a year range to see the plot for. I think this is
                useful for people who wants to have a closer look at any part of
                any data they're interested in.
              </div>
            </div>
          </div>
        </div>

        <div className="Part" id="part2">
          <div id="name">Part Two</div>

          <div className="text">
            <div className="description">
              I used new dataset obtained from:
              <p>
                https://catalog.data.gov/dataset/current-population-survey-union-affiliation-data
              </p>
              <p>
                This is the data about Current Population Survey.The Current
                Population Survey (CPS) is a sample survey of the population 16
                years of age and over.
              </p>
              <p>
                This is the link for seq_code:
                description:https://download.bls.gov/pub/time.series/lu/lu.seq
              </p>
              <p>
                I only plot the data for one item in one figure, but I chose to
                use both plot chart and bar chart to give the graph more
                dimension.
              </p>
              <p>
                For part 2, although I have a function to scrub the data in my
                python code, I asked the user to choose whether they want to
                generate a data file. Therefore I didn't include any scrubbed
                data file in my folder, but if you run my code, you should be
                able to see the choice.
              </p>
            </div>
            <div className="graph">
              <img src="example.png" />
              <div className="graph_explain">
                This is the graph for "Wage and salary workers for governments"
                CPS from 1983 to 2017. In general, the population is growing
                slowly and has achieved a max value at around 2008.
              </div>
            </div>
            <div className="graph">
              <img src="example2.png" />
              <div className="graph_explain">
                This is the graph for "Median usual weekly earnings(second
                quartile), wage and salary workers. 55-to-64-year-old women" CPS
                from 2000 to 2017. In general, the population is growing slowly
                and has achieved a max value at 2017.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Assignment;
