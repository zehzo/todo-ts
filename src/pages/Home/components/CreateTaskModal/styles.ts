import { Form, Modal } from "antd";
import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";

export const AddButtonContainer = styled.div`
  button {
    border: 0;
    img {
      background-color: ${props => props.theme["gray-700"]};
      box-shadow: none;
    }
  }
`
export const ModalContainer = styled(Modal)`
  .ant-modal {
    
  }

  .ant-modal-content{
    background: ${props => props.theme["gray-700"]};
    padding: 32px 40px;
    border-radius: 5px;
    gap: 5px;
  }
  .ant-modal-header{
    .ant-modal-title {
      color: ${props => props.theme.pink};
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;

    }

    border: none;
    padding:0;
    background: ${props => props.theme["gray-700"]};
  }
  .ant-modal-body{
    padding: 24px 0 0 0;
   
    .ant-form-item-required {
    color: ${props => props.theme.white};
    font-size: 1.125rem;
    }

    #form_in_modal_title{
      background: linear-gradient(0deg, #1E1E26, #1E1E26), linear-gradient(249.73deg, #F29682 0%, #EE69AC 50%, #CB4BCF 100%);
      border: none;
      border-radius: 5px;
    }

    #form_in_modal_description{
      background: linear-gradient(0deg, #1E1E26, #1E1E26), linear-gradient(249.73deg, #F29682 0%, #EE69AC 50%, #CB4BCF 100%);
      border: none;
      border-radius: 5px;
    }
    .ant-form-item-explain-error {
      color: white;
      font-size: 0.75rem;
      padding: 0.5rem;
    }
  }  
  
  .ant-modal-footer{
    border: none;
    padding: 0;
  }

  .ant-modal-close {
    color: ${props => props.theme.white}
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FormContainer = styled(Form)`
  /* background: ${props => props.theme["gray-700"]}; */
`
