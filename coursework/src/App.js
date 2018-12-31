import React, { Component } from "react";
import Home from "./Home.js";
import Content from "./Content.js";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import News from "./News.js";
import EmbeddedGist from "./EmbeddedGist.js";
import ReactDOMServer from "react-dom/server";
import Assignment3 from "./Assignment3.js";
import Assignment5 from "./Assignment5.js";

const newsdata = [
  {
    date: "Sept.7, 2018",
    link:
      "https://www.nytimes.com/2018/09/06/nyregion/rape-police-nyc-cellphone-data.html",
    title: "Cellphone Data Undermines Woman’s Narrative of Rape by Police",
    body:
      "The prosecution of two detectives accused of raping an 18-year-old has been contentious for a year. Newly released cellphone data added fuel to that fire.",

    src: "woman.jpg",
    thoughts:
      "This news caught my eyes mainly because it has something to do with sexual harassment, which is a topic that a lot of people are paying attention to with the #Metoo movement going on.  In my opinion, usually in a case like this, people tend to believe the victims because it’s very difficult for them to stand up and bravely recall what happened. However, the data from the phones of the police officers changed public opinions. People start to feel suspicious about what the woman said. Although this case hasn’t come to an conclusion yet, the data found in the phones still showed the possibility that the woman could be lying. What’s further, the data reveals the fact that there are always people who take advantage of our inherent thoughts. In general, I think the data is very important nowadays because everything needs evidence, and real data is the strongest evidence we need."
  },
  {
    date: "July 2, 2018",
    link:
      "https://www.nytimes.com/2018/07/02/technology/facebook-federal-investigations.html",
    title:
      "Facebook Faces Broadened Federal Investigations Over Data and Privacy",
    body:
      "A passenger train traveling from New York to Miami collided with a freight train Sunday in South Carolina, the second major crash involving the rail company in less than a week.",
    thoughts:
      "The facebook data scandal could be said as breaking news to me. It is frustrating to know that our data was sold for commercial use. Losing personal data is very different from losing money. Although facebook has claimed that they stopped the software in December 2015, no one can really make sure that our data wasn’t copied a million times and shared to others before they closed it. I noticed that in the report, facebook admitted that they had shared user data with “52 hardware and software makers, including some based in China”. The leakage of personal data has gradually broken the public trust of social media. But one thing that we feel resigned to is our dependence on the social medias, and that’s why there are still millions of people using facebook.",
    src: "fb.jpg"
  },
  {
    date: "June 20, 2018",
    link:
      "https://www.nytimes.com/2018/06/19/technology/verizon-att-cellphone-tracking.html",
    title: "Largest Cellphone Carriers to Limit Sales of Location Data",
    body:
      "The change is being made after the system was used to track people without their consent.",
    src: "carrier.jpg",
    thoughts:
      "Similar to the first news, the data mentioned in this articles is also cellphone data. With the rapid development of technology, cellphones become the most important tool that human beings can’t live without. With that being said, the leakage of personal data from our cellphones is happening every second and we can’t avoid that. When I started to own my own cellphone, the first thing my parents told me is not to allow any websites to access my location information and I should always keep my GPS off. I’ve been doing that since then. Maybe at that time I didn’t really understand the reason why I wouldn’t want to let others know about my location. But later when I saw advertisement about something I just bought on Taobao (China’s largest online retailing website), I began to realize how annoying it is to feel being “watched” all the time."
  }
];

const news = newsdata.map((item, i) => {
  return (
    <News
      date={item.date}
      link={item.link}
      title={item.title}
      body={item.body}
      name={item.name}
      src={item.src}
      thoughts={item.thoughts}
      key={i}
    />
  );
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: [
        {
          name: "Assignment 1 - Sept. 12 2018",
          content: `${ReactDOMServer.renderToStaticMarkup([news])}`,
          id: 1
        },
        {
          name: "Assignment 2 - Sept. 26 2018",
          content: `
                    ${ReactDOMServer.renderToStaticMarkup(
                      <EmbeddedGist gist="RonanChang/9ee7ddf5c9995eee920d37b75b46f7ec" />
                    )}
                    `,
          id: 2
        },
        {
          name: "Assignment 3 - Oct. 09 2018",
          content: `${ReactDOMServer.renderToStaticMarkup(<Assignment3 />)}`,
          id: 3
        },
        {
          name: "Assignment 5 - Oct. 31 2018",
          content: `${ReactDOMServer.renderToStaticMarkup(<Assignment5 />)}`,
          id: 4
        }
      ]
    };
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={props => {
                return <Home assignments={this.state.assignments} />;
              }}
            />

            <Route
              path="/assignments/:id"
              render={props => {
                // Find assignment
                const assignment = this.state.assignments.find(
                  a => a.id === parseInt(props.match.params.id, 10)
                );

                // Pass to component as prop

                return (
                  <Content
                    name={assignment.name}
                    content={assignment.content}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
