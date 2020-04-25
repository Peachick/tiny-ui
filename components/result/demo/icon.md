<demo>

### Customised icon.

Pass `icon` attribute to set the icon.

```jsx live
<Result
  status="success"
  title="You order has been delivered!"
  icon={<Icon name="delivered" color="#52c41a" size={80}/>}
  extra={[
    <Button btnType="primary" key="console">
      Go Console
    </Button>
  ]}
/>
```

</demo>
