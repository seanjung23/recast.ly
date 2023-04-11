var Search = ({ searchFunction, videoSetter, videoDataSetter }) => {

  var search = _.debounce(() => searchFunction(document.getElementsByClassName('form-control')[0].value, (data) => {
    videoDataSetter(data);
    videoSetter(data[0]);
  }), 500);

  return (<div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={search} />
    <button className="btn hidden-sm-down" onClick={search}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
