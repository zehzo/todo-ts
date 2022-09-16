import { Form, Modal } from 'antd';
import styled from 'styled-components';

export const AddButtonContainer = styled.div`
  button {
    border: 0;
    cursor: pointer;
    transition: filter 0.3s;
    @media (max-width: 768px) {
      position: fixed;
      bottom: 30px;
      right: 30px;
    }

    img {
      background-color: ${(props) => props.theme['gray-700']};
      box-shadow: none;
    }
  }
  button:hover {
    filter: brightness(1.3);
  }
`;
export const ModalContainer = styled(Modal)`
  .ant-modal {
  }

  .ant-modal-content {
    background: ${(props) => props.theme['gray-700']};
    padding: 32px 40px;
    border-radius: 5px;
  }

  .ant-modal-header {
    .ant-modal-title {
      color: ${(props) => props.theme.pink};
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
    }
    border: none;
    padding: 0;
    background: ${(props) => props.theme['gray-700']};
  }

  .ant-modal-body {
    padding: 24px 0 0 0;

    .ant-form-item-required {
      color: ${(props) => props.theme.white};
      font-size: 1.125rem;
    }

    .ant-form-item-label
      > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
      display: none;
    }

    #form_in_modal_title {
      background: linear-gradient(0deg, #1e1e26, #1e1e26),
        linear-gradient(249.73deg, #f29682 0%, #ee69ac 50%, #cb4bcf 100%);
      border: none;
      border-radius: 5px;
    }

    .ant-input {
      color: white;
    }

    #form_in_modal_description {
      background: linear-gradient(0deg, #1e1e26, #1e1e26),
        linear-gradient(249.73deg, #f29682 0%, #ee69ac 50%, #cb4bcf 100%);
      border-radius: 5px;
      border-style: none;
      height: 6rem;
    }
    .ant-form-item-explain-error {
      color: ${(props) => props.theme.pink};
      font-size: 0.75rem;
      padding: 0.7rem;
    }
  }

  .ant-modal-footer {
    .ant-btn + .ant-btn:not(.ant-dropdown-trigger) {
      margin-left: 0;
    }
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    align-self: center;

    .ant-btn {
      display: flex;
      white-space: nowrap;
      justify-content: center;
      border: none;
      border-radius: 5px;
      box-shadow: 0;
      cursor: pointer;
      touch-action: manipulation;
      height: 2.25rem;
      width: 100vh;
      font-size: 1.125rem;
      color: ${(props) => props.theme.white};
      background: linear-gradient(
        249.73deg,
        #f29682 0%,
        #ee69ac 50%,
        #cb4bcf 100%
      );
      :hover {
        filter: brightness(1.2);
      }
    }

    .ant-btn-default {
      display: none;
    }
  }

  .ant-modal-close {
    color: ${(props) => props.theme.white};
  }
`;

export const FormContainer = styled(Form)``;
