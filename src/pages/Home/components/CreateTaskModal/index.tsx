import { Form, Input } from 'antd';
import React, { useState } from 'react';
import '../../../../../node_modules/antd/dist/antd.css';
import addButton from '../../../../assets/add_button.svg';
import { AddButtonContainer, FormContainer, ModalContainer } from './styles';

interface Task {
  title: string;
  description: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Task) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <ModalContainer
      open={open}
      title="Criar tarefa"
      okText="Adicionar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <FormContainer form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="title"
          label="Título"
          rules={[
            {
              required: true,
              message: 'É obrigatório informar o título da tarefa!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Descrição"
          rules={[
            {
              required: true,
              message: 'É obrigatório informar a descrição da tarefa!',
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
      </FormContainer>
    </ModalContainer>
  );
};

const CreateTaskModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <AddButtonContainer>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        <img src={addButton} />
      </button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </AddButtonContainer>
  );
};

export default CreateTaskModal;
