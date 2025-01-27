



# mean_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/reduce_ops/mean_op.mojo)  
  

## mean


```swift
mean(arg0: Array, axes: List[Int], keepdims: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the mean of the input array along the specified axes.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axes `List[Int]`: The axes along which to compute the mean.
* keepdims `Bool`: If True, the reduced axes are retained in the output array. Default: False
  
#### Returns:  
  
An array containing the mean of the input array along the specified axes.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = mean(a, List(0))
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>