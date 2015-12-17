import React from 'react';
import {Link} from 'react-router';

require("font-awesome-webpack");

var facs = [
  {'id': 'med', 'title': 'jhjhjh', 'titleTr': 'jhjhjhj', 'active': true},
  {'id': 'law', 'title': 'rtyui', 'titleTr': 'rtyui', 'active': false}
];

class Faculties extends React.Component {
  render(){
    return (
      <div>
        {this.props.children ||
        (<FacultyTable faculties={facs}/>)}
      </div>
    );
  }
}

const styles = {
  color: '#3C3C3C'
}

const stylesLast ={ paddingRight: 10}

var FacultyTable = (props) =>
  <div>
    <h3>قائمة الكليات</h3>
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>الإختصار</th>
          <th>إسم الكلية</th>
          <th>الإسم بالإنجليزية</th>
          <th>نشطة</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.faculties.map((faculty) =>
          <FacultyRow {...faculty} key={faculty.id} />
        )}
      </tbody>
    </table>
  </div>;

var FacultyRow = (props) =>
  <tr>
    <td>{props.id}</td>
    <td>{props.title}</td>
    <td>{props.titleTr}</td>
    <td>{props.active
        ?
        <i className="fa fa-check fa-2x" style={styles}></i>
        :
        <i className="fa fa-times fa-2x" style={styles}></i>}
    </td>
    <td>
      <Link to={`/admin/faculties/update/${props.id}`} style={styles}>
        <i className="fa fa-pencil-square-o fa-2x"></i>
      </Link>
      <Link to={`/admin/faculties/details/${props.id}`} style={Object.assign(styles, stylesLast)}>
        <i className="fa fa-eye fa-2x"></i>
      </Link>
    </td>
  </tr>;





module.exports = Faculties
