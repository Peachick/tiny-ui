<demo>

### Checkable

`CheckableTag` works like Checkbox, click it to toggle checked state. 

> It also has controlled & uncontrolled mode.

```jsx live
() => {
  const { CheckableTag } = Tag;
  
  const onChange = (checked) => {
    console.log(checked)
  };
  
  return (
    <>
      <CheckableTag defaultChecked={true} onChange={onChange}>Tag1</CheckableTag>
      <CheckableTag defaultChecked={false} onChange={onChange}>Tag2</CheckableTag>
      <CheckableTag defaultChecked={false} onChange={onChange}>Tag3</CheckableTag>
    </>
  );
}
```

</demo>
