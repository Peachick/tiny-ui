<demo>

### Alignment

Child elements vertically aligned.

```jsx live
() => {
  const row = {
    padding: '10px 0',
    margin: '16px 0',
    background: 'rgba(128, 128, 128, 0.08)',
  };

  const box = {
    color: '#fff',
    textAlign: 'center',
  };

  const box100 = {
    height: 100,
    lineHeight: '100px',
  }; 

  const box50 = {
    height: 50,
    lineHeight: '50px',
  }; 

  const box120 = {
    height: 120,
    lineHeight: '120px',
  }; 

  const box80 = {
    height: 80,
    lineHeight: '80px',
  };

  const lighterBox = {
    backgroundColor: '#6E41BFD6',
  };
 
  const darkerBox = {
    backgroundColor: '#6E41BFFA',
  };

  return (
    <>
      <Divider align="left">Align Top</Divider>
      <Row style={row} justify="center" align="top">
        <Col span={4}><div style={{...box, ...darkerBox, ...box100}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...lighterBox, ...box50}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...darkerBox, ...box120}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...lighterBox, ...box80}}>col-4</div></Col>
      </Row>
  
      <Divider align="left">Align Center</Divider>
      <Row style={row} justify="space-around" align="center">
        <Col span={4}><div style={{...box, ...darkerBox, ...box100}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...lighterBox, ...box50}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...darkerBox, ...box120}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...lighterBox, ...box80}}>col-4</div></Col>
      </Row>
  
      <Divider align="left">Align Bottom</Divider>
      <Row style={row} justify="space-between" align="bottom">
        <Col span={4}><div style={{...box, ...darkerBox, ...box100}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...lighterBox, ...box50}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...darkerBox, ...box120}}>col-4</div></Col>
        <Col span={4}><div style={{...box, ...lighterBox, ...box80}}>col-4</div></Col>
      </Row>
    </>
  )
}
```

</demo>
