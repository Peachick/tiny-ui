<demo>

### Accordion

Only one panel can be expanded at a time.

```jsx live
() => {
  const { Panel } = Collapse;
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  return (
    <Collapse accordion defaultActiveKey={'1'}>
      <Panel header="This is panel header 1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
}
```

</demo>
