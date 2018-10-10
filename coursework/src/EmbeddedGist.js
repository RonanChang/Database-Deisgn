import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6

const gist_url =
  "https://gist.githubusercontent.com/RonanChang/9ee7ddf5c9995eee920d37b75b46f7ec/raw/b9295374e66f3793d0370e8da246be2bb92c731b/assignment2.py";
class EmbeddedGist extends Component {
  constructor(props) {
    super(props);
    this.gist = this.props.gist;
    this.file = this.props.file;
    this.stylesheetAdded = false;

    this.state = {
      loading: true,
      src: ``
    };
  }

  // The Gist JSON data includes a stylesheet to add to the page
  // to make it look correct. `addStylesheet` ensures we only add
  // the stylesheet one time.
  addStylesheet = href => {
    if (!this.stylesheetAdded) {
      this.stylesheetAdded = true;
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;

      document.head.appendChild(link);
    }
  };

  componentWillMount() {
    // Create a JSONP callback that will set our state
    // with the data that comes back from the Gist site

    fetch(gist_url).then(this.setState({ loading: false }));
    /*
    var gistCallback = EmbeddedGist.nextGistCallback();

    window[gistCallback] = function(gist) {
      this.setState({
        loading: false,
        src: gist.div
      });
      this.addStylesheet(gist.stylesheet);
    }.bind(this);

    var url =
      "https://gist.github.com/" +
      this.props.gist +
      ".json?callback=" +
      gistCallback;
    if (this.props.file) {
      url += "&file=" + this.props.file;
    }

    // Add the JSONP script tag to the document.
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);
    */
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    } else {
      return <div>Gist Fetched</div>;
      //return <div dangerouslySetInnerHTML={{ __html: this.state.src }} />;
    }
  }
}

EmbeddedGist.propTypes = {
  gist: PropTypes.string.isRequired, // e.g. "username/id"
  file: PropTypes.string // to embed a single specific file from the gist
};

// Each time we request a Gist, we'll need to generate a new
// global function name to serve as the JSONP callback.
var gistCallbackId = 0;
EmbeddedGist.nextGistCallback = () => {
  return "embed_gist_callback_" + gistCallbackId++;
};

export default EmbeddedGist;
