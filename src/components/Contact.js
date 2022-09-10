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
    <CDBContainer className ='CC' >
      <CDBCard style={{ width: '100%', borderRadius:"15px", backgroundColor: '#7859c7' }}>
        <div style={{ background: 'none' }} className="text-center">
          <p className="h5 mt-2 py-4 font-weight-bold" style={{fontWeight:"900",color: 'black'}}>Contact Us</p>
        </div>
        <CDBCardBody className="mx-4" style={{color: 'black', fontWeight: '900'}}>
          <CDBInput label="Name" type="text" placeholder="write your full names"/>
          <CDBInput label="E-mail" type="email" placeholder="Input email address"/>
          <p className="text-center m-0" style={{fontWeight:"900",color: 'black'}}>Subject</p>
          <CDBInput label="Message" type="textarea" />
          <div className="d-flex justify-content-center align-items-center mt-4">
            <CDBInput type="Checkbox" />
            <p className="m-0">Send me a copy of this message</p>
          </div>
          <CDBBtn style={{fontWeight:"900",color: 'black', border:'none', color: 'black', backgroundColor:'blue', margin:"10px", width:'150px', borderRadius:'15px'}}>
            Send
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Forms;