



# sum_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/reduce_ops/sum_op.mojo)  
  

## sum


```swift
sum(arg0: Array) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the sum of the input array along all axes.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
  
#### Returns:  
  
An array containing the sum of the input array along all axes.  
Type: `Array`  
  
  


#### Examples:
```python
 a = Array([[1, 2], [3, 4]])
 result = sum(a)
 print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>