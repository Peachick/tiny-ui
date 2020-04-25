<demo>

### Basic

Basic modal.

<!--start-code-->

```jsx live
() => {
  const Wrapper = () => {
    const [visible, setVisible] = React.useState(false);
  
    return (
      <>
        <Button btnType="primary" onClick={() => setVisible(true)}>Open Modal</Button>
        <Modal
          header="Basic Modal"
          visible={visible}
          onOk={() => {}}
          onCancel={() => setVisible(false)}>
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
        </Modal>
      </>
    );
  };
  
  return <Wrapper />;
}
```

</demo>
