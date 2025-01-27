



# std_op
  
[Source Code](https://github.com/endia-ai/Endia/tree/main/endia/functional/reduce_ops/std_op.mojo)  
  

## std


```swift
std(arg0: Array, axes: List[Int] = List(0), unbiased: Bool = True, keepdims: Bool = False) -> Array
```  
<details markdown="1" style="border: none; bg-color: none; box-shadow: none;">  
<summary style="border: none; bg-color: none; box-shadow: none;">  
  
Computes the standard deviation of the input array along the specified axes.  
</summary>  
  
#### Args:  

* arg0 `Array`: The input array.
* axes `List[Int]`: The axes along which to compute the standard deviation. Default: List(0)
* unbiased `Bool`: If True, the standard deviation is computed using the unbiased estimator. Default: True
* keepdims `Bool`: If True, the reduced axes are kept in the result. Default: False
  
#### Returns:  
  
An array containing the standard deviation of the input array along the specified axes.  
Type: `Array`  
  
  


#### Examples:
```python
a = Array([[1, 2], [3, 4]])
result = std(a, List(0))
print(result)
```

#### Note:
This function supports:
- Automatic differentiation (forward and reverse modes).
- Complex valued arguments.  
</details>