<demo>

### More complex layout

Sometimes it could need to put two fields in a same line.

```jsx live
() => {
  return (
    <Form initialValues={{ username: '', password: '' }} style={{ maxWidth: 600 }}>
      <Form.Item label="Name" required style={{ marginBottom: 0 }}>
        <>
          <Form.Item
            wrapperCol={24}
            style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name' }]}>
            <Input placeholder="First Name"/>
          </Form.Item>
          <span style={{display: 'inline-block', width: '10px'}}/>
          <Form.Item
            wrapperCol={24}
            style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name' }]}>
            <Input placeholder="Last Name"/>
          </Form.Item>
        </>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button btnType="primary" type="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}
```

</demo>
