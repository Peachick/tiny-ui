<demo>

### Marker

Display marker on the slider bar.

```jsx live
() => {
  const marks = {
    '-10': {
      style: { color: '#1890ff' },
      label: <strong>-10°C</strong>,
    },
    0: '0°C',
    28: '28°C',
    37: '37°C',
    100: {
      style: { color: '#f30' },
      label: <strong>100°C</strong>,
    },
  };

  const marks1 = {
    0: '0°C',
    24: '24°C',
    37: '37°C',
    100: {
      style: { color: '#f30' },
      label: <strong>100°C</strong>,
    },
  };

  return (
    <>
      <Slider dots marks={marks} step={10} defaultValue={0} min={-10} max={100}/>
      <Slider marks={marks1} defaultValue={37}/>
    </>
  )
}
```

</demo>
