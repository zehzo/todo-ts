import { Button, Form, Input, Modal, Radio } from 'antd';
import React, { useState } from 'react';
import '../../../node_modules/antd/dist/antd.css';

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
    <Modal
      open={open}
      title="Crie uma nova tarefa"
      okText="Adicionar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="title"
          label="Título"
          rules={[{ required: true, message: 'É obrigatório informar o título da tarefa!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="description" 
          label="Descrição" 
          rules={[{ required: true, message: 'É obrigatório informar a descrição da tarefa!' }]}
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const TestModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Adicionar Tarefa
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
        setOpen(false);
        }}
      />
    </div>
  );
};

export default TestModal;