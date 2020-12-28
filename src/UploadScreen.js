
import { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.jsonObj,
  };
};

class UploadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
   console.log('uplaodscreen', this.props.data)   
     if( JSON.stringify(this.props.data) === '{}') {

    
      console.log('psh')
     this.props.history.push("/");
    }
  }

  render() {
    return <div className="App"> Upload success </div>;
  }
}

export default connect(mapStateToProps)(UploadScreen);
