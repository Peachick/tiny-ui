<demo>

### Extra info

Use `hrlper` and `notice` to provide more field info.

```jsx live
<Form 
  onFinish={(values) => console.log(values)}
  onFinishFailed={({values, errors}) => console.log(values, errors)}
  initialValues={{ username: '', password: '' }} 
  style={{ maxWidth: 500 }}>  
  <Form.Item
    label="Username"
    name="username"
    helper="Username needs 5-25 characters"
    rules={[{ required: true, message: 'Please input your username' }]}>
    <Input />
  </Form.Item>
  <Form.Item
    label="Password"
    name="password"
    helper="Password must contain digit and character"
    notice="Password cannot be changed once created"
    rules={[{ required: true, message: 'Please input your password' }]}>
    <InputPassword />
  </Form.Item>
  <Form.Item>
    <Button btnType="primary" type="submit">Submit</Button>
  </Form.Item>
</Form>
```

</demo>
