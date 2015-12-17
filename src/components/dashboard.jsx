
import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class Dashboard extends React.Component {
  render() {
    return(
        <div className="row">
          <TeacherPort active={true} />
          <AdminPort active={true}/>
          <RegistrationPort active={false} />
          <AdmissionPort active={true} />
          <ReportsPort active={true} />
        </div>);
  }
}

var TeacherPortBackground = () =>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 489.4 489.4"><path d="M473.7 5.7H213.6c-8.7 0-15.7 7-15.7 15.7v110.5l11.3-13.2c5.4-6.3 12.5-10.2 20-11.8V37h228.8v204.5H229.2v-34.2l-7 8.2c-6.2 7.2-14.9 11.7-24.3 12.5v29.1c0 8.6 7 15.7 15.7 15.7h84.5L255.1 467.7c-1.9 8.7 3.6 17.4 12.3 19.3 8.7 1.9 17.4-3.6 19.3-12.3l44.5-201.9h25.8l44.5 201.9c1.7 7.6 8.4 12.7 15.8 12.7 1.2 0 2.3-0.1 3.5-0.4 8.7-1.9 14.3-10.6 12.3-19.3l-42.9-194.9h83.5c8.6 0 15.7-7 15.7-15.7V21.3C489.4 12.7 482.4 5.7 473.7 5.7zM349.4 97.1c-1.2-3.1-4.7-4.6-7.8-3.4l-92.2 32.6c-8.5-6.6-20.7-5.4-27.7 2.8l-29.3 34.2 -26-22.2c0.2 1.8 0.6 3.6 0.6 5.5v48.3l14.4 12.4c8.6 7.3 21.4 6.2 28.5-2.2l34.8-40.7 28.1-16.4 74-43.3C349.3 103.1 350.5 99.9 349.4 97.1zM109.9 105.8H92.5c-13.3 0-25 6.5-32.4 16.3l-53.4 49.1c-8.3 7.4-9.1 20.2-1.6 28.6l43.5 48.6c7.4 8.3 20.3 9 28.6 1.6 8.3-7.5 9-20.3 1.6-28.6l-30-33.5 42.6-38.1 -24.8 33.7 24.3 27.1c13.4 15 12.2 38-2.8 51.5 -10.2 9.2-24.2 11.3-36.3 7.1 0 0 0.2 93.7 0.2 194 0 13.4 10.9 24.3 24.3 24.3 13.4 0 24.3-10.9 24.3-24.3 0-100.3 0-43.1 0-144.8h16.2c0 101.6 0 44.5 0 144.8 0 7-2 13.5-5.1 19.2 4.1 3.1 9.1 5.1 14.7 5.1 13.4 0 24.3-10.9 24.3-24.3 0-100.3 0-58.2 0-316.6C150.7 124 132.5 105.8 109.9 105.8zM79.6 91.2c6.5 3.4 13.8 5.5 21.6 5.5 7.9 0 15.1-2.1 21.7-5.5 15.2-7.9 25.7-23.6 25.7-41.9 0-26.1-21.2-47.3-47.3-47.3 -26.1 0-47.3 21.2-47.3 47.3C53.9 67.6 64.4 83.3 79.6 91.2z"/></svg>
    <span className="h3">الأساتذة</span>
  </div>;

var TeacherPort = (props) => {
  if(props.active)
    return(
      <div className="col-md-3 col-sm-6 text-center active-port">
        <Link to="admin">
          <TeacherPortBackground/>
        </Link>
      </div>);
  else
    return(
      <div className="col-md-3 col-sm-6 text-center inactive-port">
        <TeacherPortBackground/>
      </div>);
}

var AdminPortBackground = () =>
  <div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 121.9 121.9"><path d="M50.1 98.9l-2.8-1c0.2-2 0.1-4.1-0.2-6.1l2.7-1.2c1.7-0.8 2.4-2.8 1.6-4.4l-1.6-3.4c-0.8-1.7-2.8-2.4-4.4-1.6l-2.7 1.2c-1.3-1.6-2.8-3-4.5-4.2l1-2.8c0.6-1.7-0.2-3.7-2-4.3l-3.5-1.3c-1.7-0.6-3.7 0.3-4.3 2l-1 2.8c-2-0.2-4.1-0.1-6.1 0.2L21 72c-0.8-1.7-2.8-2.4-4.4-1.6l-3.4 1.6c-1.7 0.8-2.4 2.8-1.6 4.4l1.2 2.7c-1.6 1.3-3 2.8-4.2 4.5l-2.8-1c-1.7-0.6-3.7 0.3-4.3 2l-1.3 3.5c-0.3 0.8-0.3 1.7 0.1 2.6 0.4 0.8 1 1.4 1.9 1.7l2.8 1c-0.2 2-0.1 4.1 0.2 6.1l-2.7 1.2c-1.7 0.8-2.4 2.8-1.6 4.4l1.6 3.4c0.8 1.7 2.8 2.4 4.4 1.6l2.7-1.2c1.3 1.6 2.8 3 4.5 4.2l-1 2.8c-0.3 0.8-0.3 1.7 0.1 2.6 0.4 0.8 1 1.4 1.9 1.7l3.5 1.3c0.8 0.3 1.7 0.3 2.6-0.1 0.8-0.4 1.4-1 1.7-1.9l1-2.8c2 0.2 4.1 0.1 6.1-0.2l1.2 2.7c0.8 1.7 2.8 2.4 4.4 1.6l3.4-1.6c1.7-0.8 2.4-2.8 1.6-4.4l-1.2-2.7c1.6-1.3 3-2.8 4.2-4.5l2.8 1c0.8 0.3 1.8 0.3 2.6-0.1 0.8-0.4 1.4-1 1.7-1.9l1.3-3.5C52.7 101.5 51.8 99.6 50.1 98.9zM31.7 107.7c-1.8 0.8-3.6 1.2-5.5 1.2 -5.2 0-9.9-3-12-7.7 -3.1-6.6-0.1-14.5 6.5-17.6 1.8-0.8 3.6-1.2 5.5-1.2 5.2 0 9.9 3 12 7.7C41.2 96.7 38.3 104.6 31.7 107.7zM83.2 108.5l-1.5-0.6c0.1-1.1 0.1-2.3-0.1-3.4l1.5-0.7c0.9-0.4 1.3-1.5 0.9-2.5l-0.9-1.9c-0.4-0.9-1.5-1.3-2.5-0.9l-1.5 0.7c-0.7-0.9-1.6-1.7-2.5-2.3l0.6-1.5c0.4-1-0.1-2-1.1-2.4l-2-0.7c-0.9-0.3-2 0.2-2.4 1.1l-0.6 1.5c-1.1-0.1-2.3-0.1-3.4 0.1l-0.7-1.5c-0.4-0.9-1.5-1.3-2.5-0.9l-1.9 0.9c-0.9 0.4-1.3 1.5-0.9 2.5l0.7 1.5c-0.9 0.7-1.7 1.6-2.3 2.5l-1.5-0.6c-0.9-0.3-2 0.2-2.4 1.1l-0.7 2c-0.2 0.5-0.1 1 0.1 1.4 0.2 0.5 0.6 0.8 1 1l1.5 0.6c-0.1 1.1-0.1 2.3 0.1 3.4l-1.5 0.7c-0.9 0.4-1.3 1.5-0.9 2.5l0.9 1.9c0.4 0.9 1.5 1.3 2.5 0.9l1.5-0.7c0.7 0.9 1.6 1.7 2.5 2.3l-0.6 1.5c-0.2 0.5-0.2 1 0.1 1.4 0.2 0.5 0.6 0.8 1 1l2 0.7c0.5 0.2 1 0.2 1.4-0.1s0.8-0.6 1-1l0.6-1.5c1.1 0.1 2.3 0.1 3.4-0.1l0.7 1.5c0.4 0.9 1.5 1.3 2.5 0.9l1.9-0.9c0.9-0.4 1.3-1.5 0.9-2.5l-0.7-1.5c0.9-0.7 1.7-1.6 2.3-2.5l1.5 0.6c0.5 0.2 1 0.2 1.4-0.1 0.4-0.2 0.8-0.6 1-1l0.7-2C84.6 109.9 84.1 108.9 83.2 108.5zM72.9 113.4c-1 0.4-2 0.7-3.1 0.7 -2.9 0-5.5-1.7-6.7-4.3 -1.7-3.7-0.1-8.1 3.6-9.8 1-0.4 2-0.7 3.1-0.7 2.9 0 5.5 1.7 6.7 4.3C78.2 107.3 76.6 111.7 72.9 113.4zM118.3 49.6l-4.7-1.7c0.4-3.4 0.2-6.9-0.4-10.3l4.5-2.1c2.8-1.3 4.1-4.6 2.8-7.5l-2.6-5.7c-1.3-2.8-4.6-4.1-7.5-2.8l-4.5 2.1c-2.2-2.7-4.8-5.1-7.6-7l1.7-4.7c1.1-2.9-0.4-6.2-3.3-7.2l-5.9-2.2c-2.8-1-6.2 0.5-7.2 3.3l-1.7 4.7c-3.4-0.4-6.9-0.2-10.3 0.4l-2.1-4.5c-1.3-2.8-4.6-4.1-7.5-2.8l-5.7 2.6c-2.8 1.3-4.1 4.7-2.8 7.5l2.1 4.5c-2.7 2.2-5.1 4.8-7 7.6l-4.7-1.7c-2.8-1-6.2 0.5-7.2 3.3l-2.2 5.9c-0.5 1.4-0.5 2.9 0.2 4.3 0.6 1.4 1.8 2.4 3.2 2.9l4.7 1.7c-0.4 3.4-0.2 6.9 0.4 10.3l-4.5 2.1c-2.8 1.3-4.1 4.6-2.8 7.5l2.6 5.7c1.3 2.8 4.6 4.1 7.5 2.8l4.5-2.1c2.2 2.7 4.8 5.1 7.6 7l-1.7 4.7c-0.5 1.4-0.5 2.9 0.2 4.3 0.6 1.4 1.8 2.4 3.2 2.9l5.9 2.2c1.4 0.5 2.9 0.5 4.3-0.2 1.4-0.6 2.4-1.8 2.9-3.2l1.7-4.7c3.4 0.4 6.9 0.3 10.3-0.4l2.1 4.5c1.3 2.8 4.6 4.1 7.5 2.8l5.7-2.6c2.8-1.3 4.1-4.6 2.8-7.5l-2.1-4.5c2.7-2.2 5.1-4.8 7-7.6l4.7 1.7c1.4 0.5 2.9 0.5 4.3-0.2 1.4-0.6 2.4-1.8 2.9-3.2l2.2-5.9C122.7 53.9 121.2 50.7 118.3 49.6zM87.3 64.3c-2.9 1.4-6.1 2-9.3 2 -8.7 0-16.6-5.1-20.2-12.9C52.7 42.2 57.6 29 68.7 23.9c2.9-1.4 6.1-2 9.3-2 8.7 0 16.6 5.1 20.2 12.9C103.4 45.9 98.5 59.2 87.3 64.3z"></path></svg>
    <span className="h3">الاعدادات</span>
  </div>;

var AdminPort = (props) => {
  if(props.active)
    return(
      <div className="col-md-3 col-sm-6 text-center active-port">
        <Link to="admin">
          <AdminPortBackground/>
        </Link>
      </div>);
  else
    return(
      <div className="col-md-3 col-sm-6 text-center inactive-port">
        <AdminPortBackground/>
      </div>);
}

var RegistrationPortBackground = () =>
<div>
  <svg viewBox="0 0 331.331 331.331" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"><path d="M30.421 317.462l4.422-17.661 -12.194-4.814 -8.376 13.804c0 0 4.618 12.526-0.511 22.539C13.766 331.331 20.184 320.399 30.421 317.462zM22.229 309.358c1.501-0.615 3.231 0.087 3.851 1.561 0.625 1.474-0.087 3.171-1.588 3.786 -1.501 0.615-3.231-0.087-3.851-1.561C20.01 311.664 20.723 309.967 22.229 309.358zM158.353 112.621c-35.115 28.8-81.086 88.124-120.073 157.423l-0.022-0.027 -6.815 12.026 7.267 2.796 3.84-10.117c20.799-37.491 77.224-135.4 180.397-200.451 0 0 38.411-22.877 76.256-54.516 -9.214 7.702-27.391 17.356-37.247 23.584C236.088 59.683 204.166 75.043 158.353 112.621zM33.2 215.365c-7.985 28.223-7.528 49.718-4.438 55.625h4.83c13.337-27.625 77.572-127.693 117.554-159.016 41.424-32.455 73.378-51.339 100.253-65.111 9.437-4.835 19.118-11.384 27.848-17.949 10.601-8.36 21.348-17.302 30.758-26.053L282.728 20.75 294.89 2.148 271.67 25.759 286.78 0c-35.746 3.225-68.918 21.109-68.918 21.109 -13.271 15.741-23.959 40.782-23.959 40.782 -0.37-12.521 8.11-31.481 8.11-31.481 -6.266 2.861-30.073 16.459-30.073 16.459 -11.645 9.66-15.262 35.06-15.262 35.06 -2.214-10.019 5.526-29.333 5.526-29.333 -33.543 19.32-57.502 52.231-57.502 52.231 -16.584 32.553-2.948 57.953-8.11 51.872 -5.162-6.081-4.052-28.261-4.052-28.261 -35.017 33.63-38.699 49.724-38.699 49.724 -5.896 14.31-11.058 52.59-11.058 52.59 -3.318-3.579 0-23.611 0-23.611 -8.479 17.889-4.422 34.701-4.422 34.701C34.309 240.407 33.2 215.365 33.2 215.365zM310.01 14.191c0 0-13.483 13.065-30.758 26.053 -27.081 21.359-53.156 38.819-53.156 38.819C123.945 139.425 67.025 237.932 48.212 271.708h10.002c3.535-2.834 8.844-4.971 31.014-11.389 28.011-8.11 44.72-25.041 44.72-25.041s-25.553 14.31-37.595 12.88 -28.223 3.1-28.223 3.1 -6.179-2.861 24.291-7.392 80.596-38.634 80.596-38.634 -19.167 7.87-28.011 7.152c-8.844-0.718-30.714 0-30.714 0 14.495-3.34 28.011-1.43 50.126-9.779 22.115-8.349 20.886-7.631 20.886-7.631 25.063-8.349 35.474-34.342 35.474-34.342 -4.335 1.67-37.443 5.722-51.176 1.67 -13.734-4.052-37.132 0-37.132 0 22.115-7.392 27.032-4.052 32.433-4.291 5.406-0.239 22.855 1.191 57.502-10.731s44.475-26.711 44.475-26.711l-23.366 3.122c15.257-2.567 32.455-12.662 32.455-12.662 -10.568 2.861-27.032 4.291-27.032 4.291 19.412-4.291 30.225-10.253 30.225-10.253 18.183-13.832 22.36-34.342 22.36-34.342 -25.803 8.822-46.194 4.77-46.194 4.77 35.387-2.382 45.215-11.449 50.126-13.592 4.917-2.148 6.94-11.03 6.94-11.03 -17.878 6.44-38.15 7.511-38.15 7.511 21.93-3.399 40.722-14.49 40.722-14.49V32.792c-8.479 4.83-23.399 8.588-23.399 8.588l23.219-15.023C316.091 18.841 310.01 14.191 310.01 14.191z"></path><polygon points="23.551 290.571 37.361 296.103 39.933 289.989 26.124 284.458 "></polygon><path d="M177.036 285.458c-45.628 21.936-89.462 36.888-147.758 38.846 -5.439 0.185-5.466 5.624 0 5.439 52.15-1.751 95.543-12.961 137.391-32.575 46.618-21.854 89.435-40.167 147.828-46.39 5.385-0.577 3.095-5.814-2.252-5.243C260.531 251.051 218.514 265.519 177.036 285.458z"></path></svg>
  <span className="h3">التسجيل</span>
</div>;

var RegistrationPort = (props) => {
  if(props.active)
    return(
      <div className="col-md-3 col-sm-6 text-center active-port">
        <Link to="admin">
          <RegistrationPortBackground/>
        </Link>
      </div>);
  else
    return(
      <div className="col-md-3 col-sm-6 text-center inactive-port">
        <RegistrationPortBackground/>
      </div>);
}

var AdmissionPortBackground = () =>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 474.8 474.8"><path d="M396.3 257.1c-1.1-0.6-2.3-0.9-3.4-0.9 -2.5 0-4.7 1-6.6 2.9l-18.3 18.3c-1.7 1.7-2.6 3.8-2.6 6.3v72.5c0 12.6-4.5 23.3-13.4 32.3 -8.9 8.9-19.7 13.4-32.3 13.4H82.2c-12.6 0-23.3-4.5-32.3-13.4 -8.9-8.9-13.4-19.7-13.4-32.3V118.6c0-12.6 4.5-23.3 13.4-32.3 8.9-8.9 19.7-13.4 32.3-13.4H319.8c4.2 0 8.5 0.6 12.8 1.7 1.1 0.4 2 0.6 2.6 0.6 2.5 0 4.7-0.9 6.6-2.9l14-14c2.3-2.3 3.1-5 2.6-8.3 -0.6-3-2.3-5.2-5.1-6.6 -10.3-4.8-21.4-7.1-33.4-7.1H82.2c-22.6 0-42 8-58.1 24.1C8 76.6 0 96 0 118.6v237.5c0 22.6 8 42 24.1 58.1 16.1 16.1 35.5 24.1 58.1 24.1h237.5c22.6 0 42-8 58.1-24.1 16.1-16.1 24.1-35.4 24.1-58.1v-90.8C402 261.4 400.1 258.6 396.3 257.1zM468 93.2l-31.4-31.4c-4.6-4.6-10-6.9-16.3-6.9 -6.3 0-11.7 2.3-16.3 6.9L219.3 246.5l-75.1-75.1c-4.6-4.6-10-6.9-16.3-6.9 -6.3 0-11.7 2.3-16.3 6.9l-31.4 31.4c-4.6 4.6-6.9 10-6.9 16.3 0 6.3 2.3 11.7 6.9 16.3l122.8 122.8c4.6 4.6 10 6.9 16.3 6.9 6.3 0 11.7-2.3 16.3-6.9l232.4-232.4c4.6-4.6 6.9-10 6.9-16.3S472.5 97.8 468 93.2z"/></svg>
    <span className="h3">القبول</span>
  </div>;

var AdmissionPort = (props) => {
  if(props.active)
    return(
      <div className="col-md-3 col-sm-6 text-center active-port">
        <Link to="admin">
          <AdmissionPortBackground/>
        </Link>
      </div>);
  else
    return(
      <div className="col-md-3 col-sm-6 text-center inactive-port">
        <AdmissionPortBackground/>
      </div>);
}

var ReportsPortBackground = () =>
  <div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 422.1 422.1"><path d="M229 392.7H44.5V27.3h198.9V82.7c0 5.6 4.5 10.1 10.1 10.1h53.8l0 181.6c9.4 0.2 18.6 2 27.3 5.2V77.7c0-2.2-0.9-4.2-2.4-5.8L262.7 2.4C261.1 0.9 259.1 0 256.9 0H41.8C28.3 0 17.3 11 17.3 24.5v370.9c0 13.5 11 24.5 24.5 24.5h207C240.5 412.4 233.7 403.1 229 392.7zM404.8 311.6c0-4.6-1.8-8.9-5-12.1l-12.8-12.8c-3.2-3.2-7.6-5-12.1-5 -4.6 0-8.9 1.8-12.1 5l-19.6 19.6c-10.5-7.5-23.3-11.9-37.2-11.9 -35.3 0-63.9 28.6-63.9 63.9 0 35.3 28.6 63.9 63.9 63.9 35.3 0 63.9-28.6 63.9-63.9 0-1.4-0.1-2.8-0.1-4.3l30.2-30.2C403 320.5 404.8 316.2 404.8 311.6zM385.9 315.5l-61.4 61.4c-1.3 1.3-3.1 2-4.9 2h0c-1.8 0-3.6-0.7-4.9-2l-28.5-28.5c-2.7-2.7-2.7-7.1 0-9.8l5.5-5.5c2.7-2.7 7.1-2.7 9.8 0l18.1 18.1 51-51c1.3-1.3 3.1-2 4.9-2s3.6 0.7 4.9 2l5.5 5.5C388.6 308.4 388.6 312.8 385.9 315.5zM188.1 109l-57.4 13.1 13.1-57.4c-20.1-5-42.3 0.3-58.1 16 -23.8 23.8-23.8 62.5 0 86.3 23.8 23.8 62.5 23.8 86.3 0C187.8 151.3 193.2 129.1 188.1 109zM188.7 64.1c-8.1-8.1-17.9-13.4-28.3-16l-13.1 57.4 57.4-13.1C202.1 82 196.8 72.2 188.7 64.1z"></path><path d="M89.2 249.9h21c5.8 0 10.5-4.7 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5H89.2c-5.8 0-10.5 4.7-10.5 10.5C78.6 245.2 83.3 249.9 89.2 249.9zM170.2 267.9H89.2c-5.8 0-10.5 4.7-10.5 10.5 0 5.8 4.7 10.5 10.5 10.5h81c5.8 0 10.5-4.7 10.5-10.5C180.7 272.6 176 267.9 170.2 267.9zM158.2 306.9H89.2c-5.8 0-10.5 4.7-10.5 10.5 0 5.8 4.7 10.5 10.5 10.5h69c5.8 0 10.5-4.7 10.5-10.5C168.7 311.6 164 306.9 158.2 306.9z"></path></svg>
    <span className="h3">التقارير</span>
  </div>;

var ReportsPort = (props) => {
  if(props.active)
    return(
      <div className="col-md-3 col-sm-6 text-center active-port">
        <Link to="admin">
          <ReportsPortBackground/>
        </Link>
      </div>);
  else
    return(
      <div className="col-md-3 col-sm-6 text-center inactive-port">
        <ReportsPortBackground/>
      </div>);
}