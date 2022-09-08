import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBContainer } from 'cdbreact';

const Forms = () => {
  const option = [
    {
      text: 'Feature request',
      value: '1',
    },
    {
      text: 'Report a bug',
      value: '2',
    },
    {
      text: 'Help',
      value: '3',
      icon: 'question-circle',
    },
  ];
  return (
    <CDBContainer className="contact" style={{background: '' }}>
      <CDBCard style={{ width: '100%', margin:'20px', borderRadius:"15px", backgroundColor: '#25316D' }}>
        <div style={{ background: 'none' }} className="text-center">
          <p className="h5 mt-2 py-4 font-weight-bold" style={{fontWeight:"900",color: 'blue'}}>Contact Us</p>
        </div>
        <CDBCardBody className="mx-4" style={{color: 'white'}}>
          <CDBInput label="Name" type="text" placeholder="write your full names"/>
          <CDBInput label="E-mail" type="email" placeholder="Input email address"/>
          <p className="text-center m-0" style={{fontWeight:"900",color: 'blue'}}>Subject</p>
          {/* <CDBSelect2 color="white" options={option} selected="Feedback" /> */}
          <CDBInput label="Message" type="textarea" />
          <div className="d-flex justify-content-center align-items-center mt-4">
            <CDBInput type="Checkbox" />
            <p className="m-0"  style={{fontWeight:"900",color: 'blue'}}>Send me a copy of this message</p>
          </div>
          <CDBBtn color="white" outline className="btn-block my-3 mx-0">
            Send
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Forms;