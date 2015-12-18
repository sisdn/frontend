import React from 'react'

var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

class Update extends React.Component {
  render(){
    return (
      <div>
        <h3>تعديل الكلية</h3>
        <form>
          <Input type="text" label="إسم الكلية" placeholder="إسم الكلية"/>
          <Input type="text" label="الإسم بالإنجليزية" placeholder="الإسم بالإنجليزية"/>
          
          <ButtonToolbar>
            <Button  type="reset">إلغاء</Button>
            <Button bsStyle="primary" type="submit">حفظ</Button>
          </ButtonToolbar>
        </form>
      </div>
    )
  }
}

module.exports = Update
