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
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <div style={{ background: 'black' }} className="text-center text-white">
          <p className="h5 mt-2 py-4 font-weight-bold">Contact Us</p>
        </div>
        <CDBCardBody className="mx-4">
          <CDBInput label="Name" type="text" placeholder="write your full names"/>
          <CDBInput label="E-mail" type="email" placeholder="Input email address"/>
          <p className="text-center m-0 text-muted">Subject</p>
          {/* <CDBSelect2 color="white" options={option} selected="Feedback" /> */}
          <CDBInput label="Message" type="textarea" />
          <div className="d-flex justify-content-center align-items-center mt-4">
            <CDBInput type="Checkbox" />
            <p className="m-0">Send me a copy of this message</p>
          </div>
          <CDBBtn color="dark" outline className="btn-block my-3 mx-0">
            Send
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Forms;